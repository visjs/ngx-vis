properties properties: [
  [$class: 'BuildDiscarderProperty', strategy: [$class: 'LogRotator', artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '30', numToKeepStr: '10']],
]

@Library('mare-build-library')
def nodeJS = new de.mare.ci.jenkins.NodeJS()

node {
  def buildNumber = env.BUILD_NUMBER
  def branchName = env.BRANCH_NAME
  def workspace = env.WORKSPACE
  def buildUrl = env.BUILD_URL

  // PRINT ENVIRONMENT TO JOB
  echo "workspace directory is $workspace"
  echo "build URL is $buildUrl"
  echo "build Number is $buildNumber"
  echo "branch name is $branchName"
  echo "PATH is $env.PATH"

  try {
    stage('Checkout') {
      cleanWs()
      checkout scm
    }

    stage('Build') {
      sh "npm install && npm run build"
    }

    stage('Test') {
      wrap([$class: 'Xvfb']) {
        sh "npm run test"
        // junit '*/target/tests.js.xml'
      }
    }

    stage('Publish NPM snapshot') {
      nodeJS.publishSnapshot('.', buildNumber, branchName)
    }

  } catch (e) {
      mail subject: "${env.JOB_NAME} (${buildNumber}): Error on build", to: 'github@martinreinhardt-online.de', body: "Please go to ${buildUrl}."
      throw e
  }
}
