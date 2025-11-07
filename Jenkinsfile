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

        stage('Build React App') {
            steps {
                dir('reactproject') {
                    bat 'npm run build'
                }
            }
        }

        stage('Skip Tests (No Tests Present)') {
            steps {
                echo 'No tests available — skipping test stage...'
            }
        }

        stage('Docker Build Image') {
            steps {
                dir('reactproject') {
                    bat 'docker build -t portfolio-react .'
                }
            }
        }

        stage('Docker Run Container') {
            steps {
                bat 'docker stop portfolio || exit 0'
                bat 'docker rm portfolio || exit 0'
                bat 'docker run -d -p 3000:80 --name portfolio portfolio-react'
            }
        }

        stage('Finish') {
            steps {
                echo 'Pipeline completed successfully ✅'
            }
        }
    }

}
