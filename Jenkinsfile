pipeline {
    parameters {
        choice(name: 'TESTS', choices: ['all', 'gui', 'api'], description: 'Select which tests to run: all, ui, or api')
    }
    agent any

    environment {
        NODE_ENV = 'test'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
                bat 'npx playwright install --with-deps'
            }
        }
        stage('Run Playwright Tests') {
            steps {
                script {
                    def testCmd = ''
                    if (params.TESTS == 'all') {
                        testCmd = 'npm run test'
                    } else if (params.TESTS == 'gui') {
                        testCmd = 'npm run test:gui'
                    } else if (params.TESTS == 'api') {
                        testCmd = 'npm run test:api'
                    }
                    bat testCmd
                }
            }
        }
    }

    post {
        always {
            script {
                publishHTML(target: [
                    allowMissing: false,
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright Report',
                    alwaysLinkToLastBuild: true,
                    keepAll: true
                ])
            }
            
        }
    }
}
