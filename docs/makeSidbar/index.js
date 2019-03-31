const __sidebarConfig__ ={
	'/docs/web/':[''],
	'/docs/node/':[''],
	'/docs/algorithm/':[''],
	'/docs/AI/':[''],
	'/docs/life/':['']
}
function genGitSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'git-advanced-command',
        'git-remote-command',
        'git-branch-command',
        'git-cooperate-develop-command'
      ]
    }
  ]
}
export default function MakeSidbar(){
	
}