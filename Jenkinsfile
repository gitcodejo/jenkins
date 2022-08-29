pipeline {
    agent any 
    stages {
        stage('clone repo to remote host') { 
            steps {
               echo 'push repo to remote host'
                sh 'ssh -i ~/candidate_key.pem -o StrictHostKeyChecking=no ubuntu@52.26.109.226 sudo rm -rf /var/www/html/'
                sh 'ssh -i ~/candidate_key.pem -o StrictHostKeyChecking=no ubuntu@52.26.109.226 sudo git clone https://github.com/jojojoseff/interview.git /var/www/html/'
            
            }
        }

    }
}
