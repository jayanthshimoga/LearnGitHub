#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { LearnGitHubStack } from '../lib/learn_git_hub-stack';

const app = new cdk.App();
new LearnGitHubStack(app, 'LearnGitHubStack');
