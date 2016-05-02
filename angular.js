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
        'angular/component-limit': 2,
        'angular/controller-as': 2,
        'angular/controller-as-vm': 0,
        'angular/controller-as-route': 2,
        'angular/deferred': 2,
        'angular/di-unused': 2,
        'angular/directive-restrict': [2, {"explicit": "always"}],
        'angular/empty-controller': 2,
        'angular/no-controller': 2,
        'angular/no-inline-template': [2, {"allowSimple":false}],
        'angular/no-run-logic': 0,
        'angular/no-services': [2, ['$http', '$resource']],
        'angular/on-watch': 2,

        // deprecated
        'angular/no-cookiestore': 2,
        'angular/no-http-callback': 2,
        'angular/no-directive-replace': 2,

        // naming
        'angular/file-name': 2,
        'angular/controller-name': 0,
        'angular/directive-name': 0,
        'angular/filter-name': 0,
        'angular/module-name': 0,
        'angular/service-name': 0,

        // conventions
        'angular/di-order': [0, true],
        'angular/di': [2, 'function'],
        'angular/dumb-inject': 2,
        'angular/function-type': [2, "named"],
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
        'angular/log': 1,
        'angular/no-angular-mock': 0,
        'angular/no-jquery-angularelement': 2,
        'angular/timeout-service': 2,
        'angular/typecheck-array': 0,
        'angular/typecheck-date': 0,
        'angular/typecheck-function': 0,
        'angular/typecheck-number': 0,
        'angular/typecheck-object': 0,
        'angular/typecheck-string': 0,
        'angular/window-service': 2
    }
};