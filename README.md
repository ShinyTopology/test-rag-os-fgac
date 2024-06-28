# Rag Os Fgac

## Install frontend (in localhost)

1. Configure the environment file
    ```bash
    cd <project-root>/frontend
    vi .env.development
    # .env.development
    # VITE_REGION=us-west-2 
    # VITE_API_ENDPOINT=https://<api-name>.execute-api.us-west-2.amazonaws.com/<stage>
    # VITE_USER_POOL_ID=<cognito user pool id>
    # VITE_USER_POOL_CLIENT_ID=<Cognito user pool >
    ```
2. Run React frontend 

    ```bash
    cd <project-root>/frontend
    npm ci # install depenencies
    npm run dev # execute
    ```

3. At this point you will see terminal showing something like this. Go ahead to http://localhost:5173/
    ```bash
    % npm run dev

    > frontend@0.0.0 dev
    > vite


    VITE v4.5.3  ready in 846 ms

    ➜  Local:   http://localhost:5173/
    ➜  Network: use --host to expose
    ➜  press h to show help
    ```

## Install frontend (in Amplify hosting)

AWS Amplify Hosting enables a fully-managed deployment of the application's React frontend in an AWS-managed account using Amazon S3 and Amazon CloudFront. You can optionally run the React frontend locally by skipping to Deploy the application with AWS SAM.

To set up Amplify Hosting:

1. Fork this GitHub repository and take note of your repository URL, for example https://github.com/user/rag-os-fgac/.

2. Create a GitHub fine-grained access token for the new repository by following this guide. For the Repository permissions, select Read and write for Content and Webhooks.
https://docs.aws.amazon.com/amplify/latest/userguide/setting-up-GitHub-access.html#setting-up-github-app-cloudformation

Select the Plaintext tab and confirm your secret looks like this:
```
github_pat_T2wyo------------------------------------------------------------------------rs0Pp
```

3. Create a new secret called `FrontendGithubToken` in AWS Secrets Manager and input your fine-grained access token as plaintext. 

### Deploy the frontend.

1. Change directory to 
2. Open `deploy.sh` and put the github url as `FRONTEND_REPOSITORY` variable. It should be something like 'https://github.com/user/rag-os-fgac/'
3. Run `deploy.sh` to deploy cloudformation template.



<details>
    <summary>Gitlab original README</summary>

    ## Getting started

    To make it easy for you to get started with GitLab, here's a list of recommended next steps.

    Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

    ## Add your files

    - [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
    - [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

    ```
    cd existing_repo
    git remote add origin https://gitlab.aws.dev/opensearch-rag/rag-os-fgac.git
    git branch -M main
    git push -uf origin main
    ```

    ## Integrate with your tools

    - [ ] [Set up project integrations](https://gitlab.aws.dev/opensearch-rag/rag-os-fgac/-/settings/integrations)

    ## Collaborate with your team

    - [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
    - [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
    - [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
    - [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
    - [ ] [Set auto-merge](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

    ## Test and Deploy

    Use the built-in continuous integration in GitLab.

    - [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
    - [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing (SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
    - [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
    - [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
    - [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

    ***

    # Editing this README

    When you're ready to make this README your own, just edit this file and use the handy template below (or feel free to structure it however you want - this is just a starting point!). Thanks to [makeareadme.com](https://www.makeareadme.com/) for this template.

    ## Suggestions for a good README

    Every project is different, so consider which of these sections apply to yours. The sections used in the template are suggestions for most open source projects. Also keep in mind that while a README can be too long and detailed, too long is better than too short. If you think your README is too long, consider utilizing another form of documentation rather than cutting out information.

    ## Name
    Choose a self-explaining name for your project.

    ## Description
    Let people know what your project can do specifically. Provide context and add a link to any reference visitors might be unfamiliar with. A list of Features or a Background subsection can also be added here. If there are alternatives to your project, this is a good place to list differentiating factors.

    ## Badges
    On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

    ## Visuals
    Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

    ## Installation
    Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

    ## Usage
    Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

    ## Support
    Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

    ## Roadmap
    If you have ideas for releases in the future, it is a good idea to list them in the README.

    ## Contributing
    State if you are open to contributions and what your requirements are for accepting them.

    For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

    You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

    ## Authors and acknowledgment
    Show your appreciation to those who have contributed to the project.

    ## License
    For open source projects, say how it is licensed.

    ## Project status
    If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.
</details>