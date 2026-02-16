pipeline {
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
        stage('Setup Node.js') {
            steps {
                sh '''
                if ! command -v node > /dev/null; then
                  export NVM_DIR="$HOME/.nvm"
                  if [ ! -s "$NVM_DIR/nvm.sh" ]; then
                    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
                  fi
                  . "$NVM_DIR/nvm.sh"
                  nvm install 20
                  nvm use 20
                fi
                '''
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright install --with-deps'
                sh 'npx playwright test'
            }
        }
        stage('Archive Test Results') {
            steps {
                junit 'playwright-report/*.xml'
                archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
