aws cloudformation create-stack \
  --stack-name fgac-frontend \
  --template-body file://frontend.yaml \
  --parameters ParameterKey=FrontendRepository,ParameterValue=https://github.com/ShinyTopology/test-rag-os-fgac \
               ParameterKey=GitHubTokenSecretName,ParameterValue=FrontendGithubToken \
  --capabilities CAPABILITY_NAMED_IAM