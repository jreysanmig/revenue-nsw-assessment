pipeline {
    agent {
        docker {
            image 'node:20-bullseye'
            args '-u root' // Ensures permissions for npm install
        }
    }

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
