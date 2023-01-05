class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.client.getRepoInfo(repoName, repoData => {
        console.log(repoData);
        this.display(repoData);
      });
    });
  }

  display(RepoData) {
    document.querySelector('#repo-name').textContent = RepoData.full_name;
    document.querySelector('#repo-description').textContent = RepoData.description;
    document.querySelector('#repo-image').src = RepoData.organization.avatar_url;
  }
}

module.exports = GithubView;