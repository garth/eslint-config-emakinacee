module.exports = {
    globals: {
        angular: true
    },
    plugins: [
        'angular'
    ],
    rules: {
        // error sources
        'angular/module-getter': 2,
        'angular/module-setter': 2,
        'angular/no-private-call': 2,

        // best practices
        'angular/component-limit': [0, 1],
        'angular/controller-as': 2,
        'angular/controller-as-vm': [2, 'vm'],
        'angular/controller-as-route': 2,
        'angular/deferred': 0, // research why new syntax...
        'angular/di-unused': 2,
        'angular/directive-restrict': [2,{"explicit":"always"}], // always needs a restrict where A;E are valid only.
        'angular/empty-controller': 2,
        'angular/no-controller': 2, // component first! disallow controllers.
        'angular/no-inline-template': [2, {"allowSimple":false}], // no inline templates
        'angular/no-run-logic': 0,
        'angular/no-services': [2, ['$http', '$resource']],
        'angular/on-watch': 2,

        // deprecated
        'angular/no-cookiestore': 2,
        'angular/no-http-callback': 2, // disallow $http methods success/error
        'angular/no-directive-replace': 2,

        // naming
        'angular/controller-name': [2, '/[a-zA-Z].*ctrl$/'],
        'angular/directive-name': [2,"dd"], // directive should be prefixed by dd -> ddTabs
        'angular/file-name': 0,
        'angular/filter-name': 0,
        'angular/module-name': 0,
        'angular/service-name': 2,

        // conventions
        'angular/di-order': [0, true],
        'angular/di': [2, 'function'],
        'angular/dumb-inject': 2,
        'angular/function-type': 0,
        'angular/module-dependency-order': 2,
        'angular/no-service-method': 0,
        'angular/one-dependency-per-line': 0,
        'angular/rest-service': 0,
        'angular/watchers-execution': [0, '$digest'],

        // angular wrappers
        'angular/angularelement': 1,
        'angular/definedundefined': 2,
        'angular/document-service': 2,
        'angular/foreach': 0,
        'angular/interval-service': 2,
        'angular/json-functions': 2,
        'angular/log': 2,
        'angular/no-angular-mock': 0,
        'angular/no-jquery-angularelement': 2,
        'angular/timeout-service': 2,
        'angular/typecheck-array': 2,
        'angular/typecheck-date': 2,
        'angular/typecheck-function': 2,
        'angular/typecheck-number': 2,
        'angular/typecheck-object': 2,
        'angular/typecheck-string': 2,
        'angular/window-service': 2
    }
};