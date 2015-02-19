window.onload = function() {
    var source = document.getElementById("skillsListado").innerHTML;
    var template = Handlebars.compile(source);

    var data = {skills: [
            {
                skill: "HTML/CSS",
                cuantose: "90",
                clase: "progress-striped progress-info "
            },
            {
                skill: "xHTML/CSS2",
                cuantose: "90",
                clase: "progress-striped progress-info "
            },
            {
                skill: "HTML5/CSS3",
                cuantose: "80",
                clase: "progress-striped progress-info "
            },
            {
                skill: "HTML5_Canvas",
                cuantose: "20",
                clase: "progress-striped progress-info br"
            },
            {
                skill: "JavaScript",
                cuantose: "50",
                clase: "progress-striped progress-success"
            },
            {
                skill: "JavaScript_OOP",
                cuantose: "20",
                clase: "progress-striped progress-success"
            },
            {
                skill: "Ajax",
                cuantose: "60",
                clase: "progress-striped progress-success"
            },
            {
                skill: "jQuery",
                cuantose: "70",
                clase: "progress-striped progress-success"
            },
            {
                skill: "jQuery UI",
                cuantose: "30",
                clase: "progress-striped progress-success"
            },
            {
                skill: "jQuery Mobile",
                cuantose: "60",
                clase: "progress-striped progress-success br"
            },
            {
                skill: "Grunt",
                cuantose: "50",
                clase: "progress-striped progress-danger"
            },
            {
                skill: "RequireJS",
                cuantose: "40",
                clase: "progress-striped progress-danger"
            },
            {
                skill: "Backbone.js",
                cuantose: "30",
                clase: "progress-striped progress-danger"
            },
            {
                skill: "Underscore.js / Lodash",
                cuantose: "30",
                clase: "progress-striped progress-danger"
            },
            {
                skill: "Handlebars.js",
                cuantose: "30",
                clase: "progress-striped progress-danger"
            },
            {
                skill: "AngularJS",
                cuantose: "5",
                clase: "progress-striped progress-danger"
            },
            {
                skill: "Ember.js",
                cuantose: "5",
                clase: "progress-striped progress-danger"
            },
            {
                skill: "Reacts.js",
                cuantose: "3",
                clase: "progress-striped progress-danger"
            },
            {
                skill: "Node.js",
                cuantose: "40",
                clase: "progress-striped progress-danger br"
            },
            {
                skill: "Bootstrap 2",
                cuantose: "80",
                clase: "progress-striped"
            },
            {
                skill: "Bootstrap 3",
                cuantose: "50",
                clase: "progress-striped"
            },
            {
                skill: "Foundation",
                cuantose: "30",
                clase: "progress-striped"
            },
            {
                skill: "Gumby",
                cuantose: "30",
                clase: "progress-striped br"
            },
            {
                skill: "Linux",
                cuantose: "60",
                clase: "progress-striped progress-warning"
            },
            {
                skill: "PHP",
                cuantose: "40",
                clase: "progress-striped progress-warning"
            },
            {
                skill: "MySQL",
                cuantose: "30",
                clase: "progress-striped progress-warning"
            },
            {
                skill: "WordPress",
                cuantose: "60",
                clase: "progress-striped progress-warning"
            },
            {
                skill: "Drupal",
                cuantose: "20",
                clase: "progress-striped progress-warning"
            },
            {
                skill: "PrestaShop",
                cuantose: "45",
                clase: "progress-striped progress-warning"
            },
            {
                skill: "OpenCart",
                cuantose: "50",
                clase: "progress-striped progress-warning br"
            },
            {
                skill: "Facebook Api",
                cuantose: "30",
                clase: "progress-striped progress-success"
            },
            {
                skill: "Twitter Api",
                cuantose: "40",
                clase: "progress-striped progress-success"
            },
            {
                skill: "Google MAPs Api",
                cuantose: "60",
                clase: "progress-striped progress-success br"
            },
            {
                skill: "GIT",
                cuantose: "70",
                clase: "progress-striped progress-danger"
            },
            {
                skill: "SVN",
                cuantose: "40",
                clase: "progress-striped progress-danger"
            },
            {
                skill: "Jenkins",
                cuantose: "20",
                clase: "progress-striped progress-danger"
            },
        ]};

    document.getElementById("skillsconHandlebars").innerHTML = template(data);
};