pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Akash-gif-bot/student-portfolio.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('reactproject') {
                    bat 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                dir('reactproject') {
                    bat 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                dir('reactproject') {
                    bat 'npm test --if-present'
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy step here'
            }
        }
    }
}
