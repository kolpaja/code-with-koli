module.exports = function (plop) {
  plop.setGenerator('cool-iu-component', {
    description: 'Creates CoolUi component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name: '
      }
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'components/cool-ui/{{name}}',
        templateFiles: 'plop-templates/CoolUIComponent/*.hbs',
        base: 'plop-templates/CoolUIComponent',
        stripExtensions: ['hbs']
      }
    ]
  });
  plop.setGenerator('app-component', {
    description: 'Creates App component',
    prompts: [
      {
        type: 'list',
        name: 'app'
      },
      {
        type: 'input',
        name: 'name',
        message: 'Enter component name: '
      }
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'components/{{name}}',
        templateFiles: 'plop-templates/CoolUIComponent/*.hbs',
        base: 'plop-templates/CoolUIComponent',
        stripExtensions: ['hbs']
      }
    ]
  });
};
