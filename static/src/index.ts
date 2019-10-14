import "./sass/main.sass";
import * as $ from "jquery";
import {getSlider} from "../node_modules/simple-slider/dist/simpleslider";
import * as kinibind from "../node_modules/kinibind/dist/kinibind";
import * as queryString from "../node_modules/query-string/index";
import * as lunr from "../node_modules/lunr/lunr.js";
import * as hljs from "highlight.js";
import * as bash from "../node_modules/highlight.js/lib/languages/bash";
import * as php from "../node_modules/highlight.js/lib/languages/php";
import Kiniauth from "../../../kiniauth-js/ts/index";

hljs.registerLanguage("bash", bash);
hljs.registerLanguage("php", php);
import "highlight.js/styles/darkula.css";


declare var window: any;


var blogNewsBtn = $("#btn-blognews");
var blogNews = $("#blognews");
var logoutMenuBtn = $("#btn-logout-menu");
var logoutMenu = $("#logout-menu");
var rowInfoBtn = $(".toggle-row-info");
var closeRowInfoBtn = $(".close-row-info");
var sidebarBtn = $("#btn-sidebar");


new Kiniauth({
    endpoint: "http://localhost:5000",
    elementVisibilityFunction: function (element: Element, visible: boolean) {
        element.setAttribute("data-state", visible ? "show" : "hide");
    }
});

hljs.initHighlightingOnLoad();


function defaultState() {
    blogNews.attr("data-state", "hide");
    logoutMenu.attr("data-state", "hide");
    $('*[data-target="hide"]').attr("data-target", "show");
    $("body").attr("data-gauze", "hide");
    $("body").attr("data-sidebar", "hide");

}

function gauze() {
    $("body").attr("data-gauze", "show");
}


function scrollFunction(scrollElementA, scrollElementB) {
    if (scrollElementA.scrollTop > 150 || (scrollElementB && scrollElementB.scrollTop > 150)) {

        $(".scroll-to-top").css("display", "block");


    } else {
        $(".scroll-to-top").css("display", "none");


    }
}

function topFunction() {
    // document.body.scrollTo({top: 0, behavior: 'smooth'});
    // document.documentElement.scrollTo({top: 0, behavior: 'smooth'}); // For Chrome, Firefox, IE and Opera
    var scrollElement = $("#fixedwrap").get(0);
    if (scrollElement) scrollElement.scrollTo({top: 0, behavior: "smooth"});
}


var bindDropdowns = function () {

    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {

        if (!dropdown[i].getAttribute("bound")) {

            dropdown[i].addEventListener("click", function () {

                $(".dropdown-btn").not($(this)).removeClass("active");
                $(".dropdown-btn").not($(this)).next().hide();

                this.classList.toggle("active");
                var dropdownContent = this.nextElementSibling;
                if (dropdownContent.style.display === "block") {
                    dropdownContent.style.display = "none";
                } else {
                    dropdownContent.style.display = "block";
                }
            });

            dropdown[i].setAttribute("bound", "1");


            dropdown[i].nextElementSibling.addEventListener("sourceLoaded", function () {
                var queryParams = queryString.parse(location.search);
                if (queryParams.api) {
                    if (queryParams.method) {
                        $(".dropdown-btn.api-menu-" + queryParams.api).addClass("active");
                        $(".dropdown-container.api-menu-" + queryParams.api).show();
                        $(".dropdown-container.api-menu-" + queryParams.api + " ." + queryParams.method).addClass("active");
                    }


                }
                if (queryParams["object"]) {
                    $(".dropdown-btn.api-object").addClass("active");
                    $(".dropdown-container.api-object").show();
                    $(".dropdown-container.api-object a[path='" + queryParams["object"] + "']").addClass("active");
                }

                if (queryParams["exception"]) {
                    $(".dropdown-btn.api-exception").addClass("active");
                    $(".dropdown-container.api-exception").show();
                    $(".dropdown-container.api-exception a[path='" + queryParams["exception"] + "']").addClass("active");

                }


            });

        }
    }
};


var lunrIndex, $results, pagesIndex;

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");

    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");

        if (pair[0] === variable) {
            return decodeURIComponent(pair[1].replace(/\+/g, "%20"));
        }
    }
}

var searchTerm = getQueryVariable("query");

// Initialize lunrjs using our generated index file
function initLunr() {
    // First retrieve the index file
    $.getJSON("/search-index.json")
        .done(function (index) {
            pagesIndex = index.results;
            lunrIndex = lunr(function () {
                this.field("title", {boost: 10});
                this.field("tags", {boost: 5});
                this.field("categories", {boost: 5});
                this.field("content");
                this.field("snippet");
                this.ref("uri");

                pagesIndex.forEach(function (page) {
                    this.add(page);
                }, this);
            });
        })
        .fail(function (jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.error("Error getting Hugo index flie:", err);
        });
}

// Nothing crazy here, just hook up a listener on the input field
function initUI() {
    $results = $("#results");
    $("#search").keyup(function () {
        $results.empty();

        // Only trigger a search when 2 chars. at least have been provided
        var query = $(this).val();
        if (query < 2) {
            return;
        }

        var results = search(query);

        renderResults(results);
    });
}

/**
 * Trigger a search in lunr and transform the result
 *
 * @param  {String} query
 * @return {Array}  results
 */
function search(query) {
    return lunrIndex.search(query).map(function (result) {
        return pagesIndex.filter(function (page) {
            return page.uri === result.ref;
        })[0];
    });
}

/**
 * Display the 10 first results
 *
 * @param  {Array} results to display
 */
function renderResults(results) {
    if (!results.length) {
        return;
    }


    var prefix = '<h4 class="pt150 mt0 uppercase">Search results: </h4>';
    $results.append(prefix);

    // Only show the ten first results
    results.slice(0, 100).forEach(function (result) {

        // console.log(result);

        var html = '<h4 class="mb0 "><a class="bold inv" href="' + result.uri + '">' + result.title + "</a></h4>";
        html += '<p class="small mb0"><a class="normal inv brand-2-text" href="' + result.uri + '">' + result.uri + "</a></p>";
        html += '<p class="small">' + result.snippet + " ...</p>";
        $results.append(html);
    });

    var suffix = '<div class="pb3">&nbsp;</div>';
    $results.append(suffix);
}

// Let's get started
initLunr();


$(document).ready(function () {


    logoutMenuBtn.on("click", function (e) {
        if ($(this).attr("data-target") === "show") {
            defaultState();
            gauze();
            $(this).attr("data-target", "hide");
            logoutMenu.attr("data-state", "show");
        } else {
            $(this).attr("data-target", "show");
            defaultState();
        }

    });


    blogNewsBtn.on("click", function (e) {

        if ($(this).attr("data-target") === "show") {
            defaultState();
            gauze();
            $(this).attr("data-target", "hide");
            blogNews.attr("data-state", "show");
        } else {
            $(this).attr("data-target", "show");
            defaultState();
        }

    });

    sidebarBtn.on("click", function () {
        if ($(this).attr("data-target") === "show") {
            defaultState();
            gauze();
            $(this).attr("data-target", "hide");
            $("body").attr("data-sidebar", "show");
        } else {
            $(this).attr("data-target", "show");
            defaultState();
        }
    });

    rowInfoBtn.on("click", function (e) {
        e.preventDefault();
        $(this).closest(".item").siblings().find(".expand-menu").removeClass("active");

        $(this).closest(".item").find(".expand-menu").toggleClass("active");

    });


    closeRowInfoBtn.on("click", function (e) {
        $(this).closest(".item").siblings().find(".expand-menu").removeClass("active");

        $(this).closest(".expand-menu").removeClass("active");

    });


    $("#fixedwrap").on("scroll", function () {
        scrollFunction(this, null);

    });


    $(".scroll-to-top").on("click", function () {
        topFunction();
    });


    bindDropdowns();


    $(".btn-close-sidebar").on("click", function () {
        defaultState();
    });

    $(".btn-close-sidebar-logged").on("click", function () {
        defaultState();

    });

    $(".gauze").on("click", function () {
        defaultState();
    });

    $(".close-menu").on("click", function () {
        defaultState();
    });

    $(window).resize(function () {
        defaultState();
    });

    $("#toolsfilters button").on("click", function () {
        $("#toolsfilters").hide();
    });

    if (document.getElementById("master-slider")) {
        getSlider({
            container: document.getElementById("master-slider"),
            delay: 10,
            prop: "opacity",
            unit: "",
            init: 0,
            show: 1,
            end: 0,
            duration: 2
        });
    }

    kinibind.bind(document.getElementById("body"), {tldFilterValue: "", request: queryString.parse(location.search)});

    initUI();

    $("ul.tabs li").on("click", function () {
        var tab_id = $(this).attr("data-tab");

        $("ul.tabs li").removeClass("current");
        $(".tab-content").removeClass("current");

        $(this).addClass("current");
        $("#" + tab_id).addClass("current");
    });

});


