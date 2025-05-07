# Deployment Options for Aspire Aesthetics

This document outlines various options for deploying your Next.js application.

## Recommended Option: Vercel

[Vercel](https://vercel.com) is the platform created by the team behind Next.js and offers the most seamless deployment experience.

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com)
2. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Run the following command from your project directory:
   ```bash
   vercel
   ```
4. Follow the prompts to deploy your application
5. For subsequent deployments, you can use:
   ```bash
   vercel --prod
   ```

Alternatively, you can connect your GitHub repository to Vercel for automatic deployments:

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your repository
5. Configure your project settings
6. Deploy

## Alternative Deployment Options

### Netlify

[Netlify](https://netlify.com) is another excellent platform for Next.js applications.

1. Create an account on [Netlify](https://netlify.com)
2. Push your code to GitHub, GitLab, or Bitbucket
3. In Netlify dashboard, click "New site from Git"
4. Connect to your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Deploy

### AWS Amplify

AWS Amplify provides a fully managed CI/CD and hosting service.

1. Create an AWS account
2. Install the Amplify CLI:
   ```bash
   npm install -g @aws-amplify/cli
   ```
3. Configure Amplify:
   ```bash
   amplify configure
   ```
4. Initialize Amplify in your project:
   ```bash
   amplify init
   ```
5. Add hosting:
   ```bash
   amplify add hosting
   ```
6. Deploy:
   ```bash
   amplify publish
   ```

### Traditional Hosting (DigitalOcean, AWS EC2, etc.)

For more control, you can deploy to a VPS or cloud instance:

1. Build your Next.js application:
   ```bash
   npm run build
   ```
2. Set up a Node.js environment on your server
3. Transfer your application files to the server
4. Install dependencies:
   ```bash
   npm install --production
   ```
5. Start the application:
   ```bash
   npm start
   ```
6. Set up a reverse proxy (Nginx/Apache) to forward requests to your Next.js application
7. Configure SSL with Let's Encrypt

### Docker Deployment

A Docker setup has been provided in this repository:

1. **Dockerfile**: Contains the configuration to build a Docker image for the application
2. **.dockerignore**: Excludes unnecessary files from the Docker image
3. **docker-compose.yml**: Simplifies running the containerized application

#### Using Docker:

1. Build the Docker image:
   ```bash
   docker build -t aspire-aesthetics .
   ```
2. Run the container:
   ```bash
   docker run -p 3000:3000 aspire-aesthetics
   ```

#### Using Docker Compose:

1. Start the application:
   ```bash
   docker-compose up -d
   ```
2. View logs:
   ```bash
   docker-compose logs -f
   ```
3. Stop the application:
   ```bash
   docker-compose down
   ```

#### Deployment with Docker:

You can deploy the Docker container to various platforms:

1. **AWS ECS/EKS**: Deploy as a container service
2. **Google Cloud Run**: Serverless container platform
3. **Azure Container Instances**: Serverless container service
4. **DigitalOcean App Platform**: Supports Docker deployments
5. **Kubernetes**: Deploy to any Kubernetes cluster

## CI/CD with GitHub Actions

A GitHub Actions workflow has been set up in `.github/workflows/ci-cd.yml` to automate the build, test, and deployment process.

### Workflow Features

- Automatically runs on pushes to main/master branches and pull requests
- Builds and tests the application
- Caches dependencies and build artifacts for faster runs
- Includes deployment configurations for Vercel and Docker (disabled by default)

### Enabling Deployments

#### For Vercel Deployment:

1. Create a Vercel account and set up your project
2. Get your Vercel token, organization ID, and project ID
3. Add the following secrets to your GitHub repository:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`
4. Edit the workflow file to enable the Vercel deployment step by changing `if: false` to `if: true`

#### For Docker Deployment:

1. Create a DockerHub account
2. Add the following secrets to your GitHub repository:
   - `DOCKERHUB_USERNAME`
   - `DOCKERHUB_TOKEN`
3. Edit the workflow file to enable the Docker deployment steps by changing `if: false` to `if: true`
4. Update the Docker image tag in the workflow file with your DockerHub username

## Environment Configuration

For any deployment option, make sure to:

1. Set up environment variables required by your application
2. Configure domain names and SSL certificates
3. Set up any additional CI/CD configurations as needed

## Production Considerations

- Enable caching strategies
- Set up monitoring and logging
- Configure proper error handling
- Implement CDN for static assets
- Set up database backups if applicable
