// import BlogArticles from './components/BlogArticles'
// import WorklogArticles from './components/WorklogArticles'
// import StudyArticles from './components/StudyArticles'
import { convertBlogArticle, convertWorklogArticle, convertStudyArticle } from './helper'

const t = ['0875b09b59ef3a9341c59', '35333d7a31f606fcbfc']
export const accessToken = `${t[0]}${t[1]}`

export const keepAliveComps = [
  // BlogArticles.name,
  // WorklogArticles.name,
  // StudyArticles.name,
]

export const navsRepo = {
  blog: { key: 'blog', name: 'article', route: '/article', icon: 'fa-chrome', repo: 'qingely.github.io', resolveArticle: convertBlogArticle },
  worklog: { key: 'worklog', name: 'worklog', route: '/worklog', icon: 'fa-internet-explorer', repo: 'worklog', resolveArticle: convertWorklogArticle },
  study: { key: 'study', name: 'study', route: '/study', icon: 'fa-firefox', repo: 'study', resolveArticle: convertStudyArticle },
  home: { name: 'about me', route: '/', icon: 'fa-github', exact: true },
}
