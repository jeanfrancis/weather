/*
 * for reference: meteo schweiz erklaerungen zu den ids:
 * 1 sonnig
 * 2 ziemlich sonnig
 * 3 teilweise sonnig
 * 4 wechselnd bewölkt
 * 5 bedeckt
 * 6 Aufhellungen, einzelne Regenschauer
 * 7 Aufhellungen, einzelne Regen- oder Schneeschauer
 * 8 Aufhellungen, einzelne Schneeschauer
 * 9 bewölkt, einige Regenschauer
 * 10 bewölkt, einige Regen- oder Schneeschauer
 * 11 bewölkt, einige Schneeschauer
 * 12 Aufhellungen, leicht gewitterhaft
 * 13 Aufhellungen und gewitterhaft
 * 14 stark bewölkt, schwacher Regen
 * 15 stark bewölkt, schwacher Schnee oder Regen
 * 16 stark bewölkt, schwacher Schnee
 * 17 stark bewölkt, zeitweise Regen
 * 18 stark bewölkt, zeitweise Schnee oder Regen
 * 19 stark bewölkt, zeitweise Schnee
 * 20 stark bewölkt, anhaltender Regen
 * 21 stark bewölkt, anhaltender Regen oder Schnee
 * 22 stark bewölkt, anhaltender Schnee
 * 23 stark bewölkt, leicht gewitterhaft
 * 24 stark bewölkt, gewitterhaft
 * 25 stark bewölkt, stark gewitterhaft
 * 26 hohe Bewölkung
 * 27 Hochnebel
 * 28 Nebel
 */


var weather_codes = {
    113: [1, 'sunny', 'sonnig', 'clair', 'sunnig'],
    116: [5, 'Partly Cloudy', 'teils Bewölkt', 'froid', 'Biztli bewölkt'],
    119: [26, 'Cloudy', 'Bewölkt', 'Nuageux', 'Volle Wulche'],
    122: [5, 'Overcast', 'Bedeckt', 'Nuageux', 'Bedeckt'],
    143: [28, 'Mist', 'Nebel', 'Nébuleuse', 'Näbel'],
    176: [9, 'Patchy rain nearby', 'leichter lokaler Regen', 'pluie', 'bitzli r&auml;ge zum teil'],
    179: [11, 'Patchy snow nearby', 'lokaler Schnee', 'neige', 'es schnyt zum teil'],
    182: [7, 'Patchy sleet nearby', 'lokaler Schneeregen', 'Neige fondue ', 'Schneeräge zum teil'],
    185: [15, 'Patchy freezing drizzle nearby', 'gefrorener Niesel', 'bruine verglaçante', 'gfrorene N&auml;bel'],
    200: [25, 'Thundery outbreaks in nearby', 'Sturm', 'tempête', '&auml;s st&uuml;rmt'],
    227: [19, 'Blowing snow', 'Schneewirbel', 'averses de neige', 'Schneewirbel'],
    230: [22, 'Blizzard', 'starker Schnee', 'fortes chutes de neige', 'mega vill Schnee'],
    248: [28, 'Fog', 'Nebel', 'Nébuleuse', 'Näbel'],
    260: [28, 'Freezing fog', 'Nebel', 'Nébuleuse', 'Näbel'],
    263: [14, 'Patchy light drizzle', 'Niesel', 'bruine', 'Niesel'],
    266: [14, 'Light drizzle', 'Niesel', 'bruine', 'Niesel'],
    281: [16, 'Freezing drizzle', 'Niesel', 'bruine', 'Niesel'],
    284: [22, 'Heavy freezing drizzle', 'starker Schnee', 'fortes chutes de neige', 'mega vill Schnee'],
    293: [6, 'Patchy light rain', 'leichter Regen', 'averses éparses', 'biztli R&auml;ge'],
    296: [9, 'Light rain', 'leichter Regen', 'pluie', 'bitzli r&auml;ge'],
    299: [17, 'Moderate rain at times', 'mässig Regen', 'pluie', 'mässig r&auml;ge'],
    302: [17, 'Moderate rain', 'mässig Regen', 'pluie', 'mässig r&auml;ge'],
    305: [20, 'Heavy rain at times', 'z.T. starker Regen', 'pluie', 'R&auml;ge zum teil heftig'],
    308: [20, 'Heavy rain', 'starker Regen', 'pluie', 'heftige R&auml;ge'],
    311: [9, 'Light freezing rain', 'leichter Regen', 'pluie', 'bitzli r&auml;ge'],
    314: [17, 'Moderate or Heavy freezing rain', 'mässig Regen', 'pluie', 'mässig r&auml;ge'],
    317: [15, 'Light sleet', 'gefrorener Niesel', 'bruine verglaçante', 'gfrorene N&auml;bel'],
    320: [18, 'Moderate or heavy sleet', 'Schneeregen', 'Neige fondue ', 'Schneeräge'],
    323: [19, 'Patchy light snow', 'Schneewirbel', 'averses de neige', 'Schneewirbel'],
    326: [16, 'Light snow', 'leichter Schnee', 'neige', 'bitzli Schnee'],
    329: [19, 'Patchy moderate snow', 'Schneewirbel', 'averses de neige', 'Schneewirbel'],
    332: [19, 'Moderate snow', 'Schneewirbel', 'averses de neige', 'Schneewirbel'],
    335: [19, 'Patchy heavy snow', 'Schneewirbel', 'averses de neige', 'Schneewirbel'],
    338: [22, 'Heavy snow', 'starker Schnee', 'fortes chutes de neige', 'mega vill Schnee'],
    350: [24, 'Ice pellets', 'Hagel', 'grêle', 'Hagel'],
    353: [14, 'Light rain shower', 'Niesel', 'bruine', 'Niesel'],
    356: [17, 'Moderate or heavy rain shower', 'mässig Regen', 'pluie', 'mässig r&auml;ge'],
    359: [24, 'Torrential rain shower', 'Hagel', 'grêle', 'Hagel'],
    362: [15, 'Light sleet showers', 'gefrorener Niesel', 'bruine verglaçante', 'gfrorene N&auml;bel'],
    365: [18, 'Moderate or heavy sleet showers', 'Schneeregen', 'Neige fondue ', 'Schneeräge'],
    368: [16, 'Light snow showers', 'leichter Schnee', 'neige', 'es schnyt es bitz'],
    371: [22, 'Moderate or heavy snow showers', 'starker Schnee', 'fortes chutes de neige', 'mega vill Schnee'],
    374: [17, 'Light showers of ice pellets', 'leichter Hagel', 'grêle', 'liechte Hagel'],
    377: [24, 'Moderate or heavy showers of ice pellets', 'Hagel', 'grêle', 'Hagel'],
    386: [23, 'Patchy light rain in area with thunder', 'Regen-Gewitter', 'orage comme pluie', 'Räge-Gwitter'],
    389: [23, 'Moderate or heavy rain in area with thunder', 'Regen-Gewitter', 'orage comme pluie', 'Räge-Gwitter'],
    392: [23, 'Patchy light snow in area with thunder', 'Schnee-Gewitter', 'orage comme neige', 'Schnee-Gwitter'],
    395: [24, 'Moderate or heavy snow in area with thunder', 'Schnee-Gewitter', 'orage comme neige', 'Schnee-Gwitter'],
}


var de = {
    Today: 'Heute',
    Tomorrow: 'Morgen',
    Monday: 'Montag',
    Tuesday: 'Dienstag',
    Wednesday: 'Mittwoch',
    Thursday: 'Donnerstag',
    Friday: 'Freitag',
    Saturday: 'Samstag',
    Sunday: 'Sonntag',
    Here: 'Hier',
    'Zurich Oerlikon': 'Zürich Oerlikon',
    Lucerne: 'Luzern',
    Sion: 'Sion',
    Gland: 'Gland',
    Zurich: 'Z&uuml;rich',
}
var fr = {
    Today: 'Aujourd\'hui',
    Tomorrow: 'Demain',
    Monday: 'Lundi',
    Tuesday: 'Mardi',
    Wednesday: 'Mercredi',
    Thursday: 'Jeudi',
    Friday: 'Vendredi',
    Saturday: 'Samedi',
    Sunday: 'Dimanche',
    Here: 'Ici',
    'Zurich Oerlikon': 'Zurich Oerlikon',
    Lucerne: 'Lucerne',
    Sion: 'Sion',
    Gland: 'Gland',
    Zurich: 'Z&uuml;rich',
}
var ch = {
    Today: 'H&uuml;ttu',
    Tomorrow: 'Mor&auml;',
    Monday: 'M&auml;ntag',
    Tuesday: 'Ziischtig',
    Wednesday: 'Mittwuch',
    Thursday: 'Dunnschtig',
    Friday: 'Frytig',
    Saturday: 'Samschtig',
    Sunday: 'Sunntig',
    Here: 'Hie',
    'Zurich Oerlikon': 'Züri Oerlike',
    Lucerne: 'Loz&auml;rn',
    Sion: 'Sittu',
    Gland: 'Gland',
    Zurich: 'Z&uuml;&uuml;ri',
}

var en = {};
$.each(de, function(key, val) {
    en[key] = key;
});

var options = [
    ['Here', null],
    ['Zurich Oerlikon', '47.4147014, 8.551912'],
    ['Gland', '46.4206407, 6.271175'],
    ['Lucerne', '47.0503348, 8.3156129'],
    ['Sion', '46.2293518, 7.3620487'],
    ['Zurich', '47.3814152, 8.5345162'],
]


function render(forecast, cityname, language, n, w) {
    var window_width = window.innerWidth;
    var window_height = window.innerHeight;
    
    var content = "<table><tbody><tr>"

    var min = 999
    var max = -999;
    $.each(forecast, function(i, val) {
       min = Math.min(min, val.tempMaxC);
       max = Math.max(max, val.tempMaxC);
    });
    
    var lang_map = en;
    var lang_offset = 1;
    if (language == 'de') {
        lang_map = de;
        lang_offset = 2;
    } else if (language == 'fr') {
        lang_map = fr;
        lang_offset = 3;
    } else if (language == 'ch') {
        lang_map = ch;
        lang_offset = 4;
    }
    $.each(forecast, function(i, val) {
        if (i>=n) {
            return;
        }
        var date = val.date;
        if (i == 0) {
            var weekday = 'Today';
        } else {
            var d = new Date(date);
            var weekday = d.getDayName();
        }
        var code = val.weatherCode;
        var w = weather_codes[code];
        var weather_title = null;
        var meteo_id = null;
        if (w == undefined) {
            console.log(val.weatherDesc[0].value);
        } else {
            weather_title = w[lang_offset]
            meteo_id = w[0]
        }
        var temperature = val.tempMaxC;
        var deg_class = "deg_label";
        if (temperature == min) {
            deg_class += " deg_min";
        }
        if (temperature == max) {
            deg_class += " deg_max";
        }

        content += '<td font-size:"+fontsize+"px;">';
        content += '<img class="image-svg" src="images/' + meteo_id + '.svg" />';
        content += '<span class="weekname">' + lang_map[weekday] + ': </span><span class="' + deg_class + '">' + temperature + '&deg;</span>';
        content += '<div class="condition">' + weather_title + '</div>';
        content += '</td>';
    });
            
    content += '</tr></tbody></table>';
    content += '<div id="navi"><div class="styled-select"><select class="pos">'
    $.each(options, function(i, val) {
        if (val == undefined) {
            return;
        }
        var _city = val[0];
        var _w = val[1];
        var _s = '';
        if (_city == cityname) {
            _s = 'selected="selected"'
        }
        city_name = lang_map[_city];
        if (_city == 'Here' && name_current_pos != null) {
            city_name += " (" + name_current_pos + ")";
        }
        content += '<option '+_s+' value="'+_w+'">'+city_name+'</option>';
    });
    content += '</select></div></div>';
    $("#subpage").html(content);

    var width = window_width/n*0.9;
    $(".image-svg").css("width", width+"px");
    
    var height = Math.min(window_height*0.6, width)
    $(".image-svg").css("height", height +"px");
    
    var fontsize = (window.innerWidth / 1840)*44;
    if (window_height < 100) {
        fontsize = 11;
    }
    $("body").css("font-size", fontsize +"px");
    $('.pos').change(function() {
        var v = $(this).val();
        if (v == 'null') {
            window.location.href = '?lang='+language+'&n='+n;
        } else {
            var new_ll = v.split(',');
            window.location.href = '?lat='+new_ll[0].trim()+'&lon='+new_ll[1].trim() + '&lang='+language+'&n='+n;
        }
    });
    
}

function getURLParameter(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
    );
}

function dump(obj) {
    var acc = []
    $.each(obj, function(index, value) {
            acc.push(index + ': ' + value);
    });
    return JSON.stringify(acc);
}


function nicify(str) {
    var res = str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    res.replace('ue', 'ü');
    res.replace('ae', 'ä');
    res.replace('oe', 'ö');
    return res;
}

if(typeof(String.prototype.trim) === "undefined") {
    String.prototype.trim = function() {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}

var current_lat = null;
var current_lon = null;
var name_current_pos = null;

function initialize() {
    var lat = current_lat !== null ? current_lat : getURLParameter('lat');
    var lon = current_lon !== null ? current_lon : getURLParameter('lon');
    var cityname = name_current_pos;
    if (lat == 'null') {
        $('#subpage').html('<div class="progress">looking up weather of your current position...</div>');
        $.getJSON('http://api.ipinfodb.com/v3/ip-city/?key=d762cfa8b107127831b520cc77d1107881a32faee7b85cb812a33e2300065296&format=json&callback=?', function(data) { 
            current_lat = data.latitude;
            current_lon = data.longitude;
            name_current_pos = nicify(data.cityName);
            initialize();
        });
        return;
    } else if (getURLParameter('help') != 'null') {
      $('#subpage').html('<div id="error"><p>you need to at least specify w. Possible parameters:<ul>\
<li>w: w is the WOEid from yahoo, e.g. 784794 for Zurich. Get the id from http://woeid.rosselliot.co.nz/lookup/</li>\
<li>lang: de/fr/en. If not specified the language is taken from the accept-language header</li>\
<li>n: number of days the forecast goes. 5 if not specified</li></ul>\
<a href="?w=784794&n=4&lang=de">Click here for a working example</a>.\
</div>');
      return;
    } else if (cityname == null) {
        // lat/lon selected via drop-down. Find out the city matching lat/lon in the parameters
        var latlon = lat + ', ' + lon;
        cityname = 'unbekannt';
        $.each(options, function(o) {
            if (latlon == options[o][1]) {
                cityname = options[o][0];
                return false;
            }
        });
    }
    
    var language = window.navigator.userLanguage || window.navigator.language;
    language = language.split('-')[0]
    var lang = getURLParameter('lang');
    if (lang != 'null') {
        language = lang;
    }
    var n = 5;
    var n_arg = getURLParameter('n');
    if (n_arg != 'null') {
        n = parseInt(n_arg);
    }
    
    url = 'http://free.worldweatheronline.com/feed/weather.ashx?q='+lat+','+lon+'&format=json&num_of_days=5&key=b7f534782a143453122112&callback=?';
    $.getJSON(url, function(data) {
        var d = data.data.weather;
        render(d, cityname, language, n);
    });
}