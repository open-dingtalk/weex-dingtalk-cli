const npm_registry = 'http://registry.npmjs.org';

const weex_toolkit_info = {
  url: npm_registry + '/weex-toolkit',
  type: 'npm'
}
const weex_dingtalk_info = {
  url: npm_registry + '/weex-dingtalk',
  type: 'npm'
}
const weex_dingtalk_cli_info = {
  url: npm_registry + '/weex-dingtalk-cli',
  type: 'npm'
}
const weex_dingtalk_journey_info = {
  url: npm_registry + '/weex-dingtalk-journey',
  type: 'npm'
}
const weex_vue_render_info = {
  url: npm_registry + '/weex-vue-render',
  type: 'npm'
}

const dingtalk_templates = {
  url: 'https://api.github.com/users/dingtalk-templates/repos',
  type: 'git'
}

module.exports = {
  "weex-toolkit": weex_toolkit_info,
  "weex-dingtalk": weex_dingtalk_info,
  "weex-dingtalk-cli": weex_dingtalk_cli_info,
  "weex-vue-render": weex_vue_render_info,
  "dingtalk_templates": dingtalk_templates,
  "weex-dingtalk-journey": weex_dingtalk_journey_info
};
