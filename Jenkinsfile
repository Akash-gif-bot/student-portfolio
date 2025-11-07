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

        stage('Test (No Tests Present)') {
            steps {
                dir('reactproject') {
                    catchError(buildResult: 'SUCCESS', stageResult: 'SUCCESS') {
                        bat 'npm test'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy step here...'
            }
        }
    }
}
