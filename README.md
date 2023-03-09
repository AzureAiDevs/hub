# It's Azure AI April 2023


---

## #30DaysOfAzureAI

Join us for a month-long celebration of Azure AI.

We've organized the content into 4 themed weeks. Based on your role with the topic, you can choose specific weeks or posts to check out. If you are new to Azure AI development, we recommend you read the posts in order.

* **🏁 Fundamentals** of Azure OpenAI, Azure ML, and Responsible AI
* **👩‍💻 Build intelligent apps** with Azure AI Services and embedded app models
* **🧑🏽‍🔬 Building and managing ML models** with Azure ML, MLOps and Responsible AI
* **🏭 Workshop** your way through beginners content for Data Scientist, AL, ML, MLOps, and two cognitive services workshops.
![Image showing various technologies used in low code dev](./website/static/img/azure-ai.png)

---

## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## How to Contribute

### Install Node

The [Azure AI Developer Hub](https://aka.ms/ai-april) website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator, and [React](https://reactjs.org/). The site is built using [Node.js](https://nodejs.org/en/), so you will need to install Node.js before you can build the site.

1. Install Node.js from https://nodejs.org/en/download.

### Fork the Azure AI Developer Hub repo

1. Fork this repo to your personal GitHub account.

### Clone the repo to your local machine

1. From a command window, navigate to the folder where you want to clone the repo.
1. Clone the forked repo to your local machine.

### Install dependencies

1. Change to the folder for the repo you cloned to your desktop.
1. Change to the website folder `cd website`.
1. Install the dependencies by running `npm install`. This will install all the dependencies required to build the site.

### Run the site locally

Before making any changes, you should build the site locally to test it builds correctly.

1. Ensure you are still in the `website` folder.
1. Run `npm run build` to do a complete build of the site. This should complete without errors.
1. Still in the `website` folder, run `npm run start`, wait for the site to build, and leave the server running.
1. Your browser should automatically open the site. If not, open a browser and navigate to http://localhost:3000.
1. Select **#30DaysOfAzureAI** from the top menu to navigate to the #30DaysOfAzureAI page. You should see all the blogs in the series.

### Create a branch

Depending on your preferred workflow, you can create the branch from the command line or from VS Code.

1. From the command window, navigate to the folder where you cloned the repo to your desktop. You should still be in the `website` folder, navigate back to the root folder.

    ```bash
    cd ..
    ```

1. Create a branch for your changes. The branch name should be in the format `content-name/your-github-username`. For example, `rai-mission-update-<your-github-username>`.

    ```bash
    git checkout -b content-name/your-github-username
    ```

### Make your changes

1. Start VS Code and open the `website` folder.
1. In VS Code, navigate to the `blog/2023-aia` folder.
1. Select the folder for the day you have been allocated or wish to update. ie `website/blog/2023-aia/01-01-2023-rai-mission`.
1. The folder contains an `index.md` file. This is the markdown file that contains the content for the blog post.
1. Refer to the [Understanding the structure of the index.md file](#understanding-the-structure-of-the-indexmd-file) section below for details on the structure of the file.
1. If you want to embed a YouTube video, then refer to the [Embedding a YouTube video](#embedding-a-youtube-video) section below.
1. Ideally add at least one image, it'll help make the content more engaging for the reader. You can add any required images for your post to this folder. ie `website/blog/2023-aia/01-01-2023-rai-mission/rai-mission.png`
1. Save your changes, then switch back to the browser to see the changes.

### Commit your changes

When you are happy with your changes, you can commit them to your branch.

1. Make your changes and commit them to your branch.
1. Push your changes to your forked repo.
1. Create a pull request from your forked repo to the main repo.

### View the changes

Once your changes have been merged into the main repo, you can view them on the live site.

## Understanding the structure of the index.md file

The `index.md` file contains the content for the blog post. The file is written in [Markdown](https://www.markdownguide.org/cheat-sheet/). The file contains a number of sections, each of which is described below.

### Front matter

The front matter is the section at the top of the file. It contains the metadata for the blog post. The front matter is written in [YAML](https://yaml.org/). The front matter contains the following properties:

- Check that you are the listed author. 
- If you need to change the title then let the site owner know as the banner image will need to be updated.

```yaml
---
slug: 2023-day2
title: "2. 🏁Unleash the power of Azure OpenAI"
authors: ['Dave']
draft: false
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: ['Azure-OpenAI-Services', 'Machine-Learning', 'Azure-AI']
tags: ['azure-ai', 'azure-open-ai', '30-days-of-azure-ai']

image: "https://azureaidevs.github.io/hub/img/2023/banner-day2.png"
description: "Unleashing the power of AI with Azure OpenAI: A simple guide to get started https://azureaidevs.github.io/hub/blog/2023-day2 #30DaysOfAzureAI #AzureAiDevs #AI #OpenAI"
---
```

### The Day _N_ of #30DaysOfAzureAI section

This should be a short teaser for the blog post. It should be a couple of sentences that describe what the blog post is about and why folk should read it. The content should be written in Markdown.

### The What we'll cover section

This section should contain a list of the topics that will be covered in the blog post. The list should be written in Markdown.

### The References section

This section should contain a list of the references that were used to write the blog post. The list should be written in Markdown. Include useful links to documentation, blogs, YouTube videos, Learn Modules, Case Studies and other resources.

### The Body section

This section contains the main content of the blog post. The content should be written in Markdown. If you  plan to refer folk to a blog post with more detail then keep this section short and sweet.

### The Learn More section

By default this is where the link to your detailed blog will be. If you don't have a detailed blog then you can remove this section.

## Adding YouTube videos

Adding YouTube videos to the blog post is easy. Simply add the following code to the blog post where you want the video to appear.

From the YouTube video, select share, then copy the embed code.

```html
<iframe width="100%" height="420" src="https://www.youtube.com/embed/3t3qZu1Dy1k?start=341" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
```

### Change the width and height

By default, the video will appear a bit small. Change the default width and height by changing the values in the code above. Set the width to 100% and the height to 420.

```text
width="100%" height="420"
```


## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft
trademarks or logos is subject to and must follow
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.
