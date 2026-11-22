var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
jQuery(function ($) {

    "use strict";
    
	$(document).ready(function () {
        
		// Toggle
		$("h3.olympus-toggle-trigger").click(function(){
			$(this).toggleClass("active").next().slideToggle("fast");
			return false; //Prevent the browser jump to the link anchor
		});
					
		// UI tabs
		$( ".olympus-tabs" ).tabs();
		
		// UI accordion
		$(".olympus-accordion").accordion({autoHeight: false});
        
		$(".olympus-accordion").accordion({
			heightStyle: "content"
		});
    
	   jQuery('.googlemap').each( function() {
			
			var $map_id = $(this).attr('id'),
			$title = $(this).find('.title').val(),
			$location = $(this).find('.location').val(),
			$zoom = parseInt( $(this).find('.zoom').val() ),
			geocoder, map;
			
			var mapOptions = {
				zoom: $zoom,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			
			geocoder = new google.maps.Geocoder();
			
			geocoder.geocode( { 'address': $location}, function(results, status) {
			
				if (status == google.maps.GeocoderStatus.OK) {
				
					var mapOptions = {
						zoom: $zoom,
						mapTypeId: google.maps.MapTypeId.ROADMAP
					};
					
					map = new google.maps.Map($('#'+ $map_id + ' .map_canvas')[0], mapOptions);
					
					map.setCenter(results[0].geometry.location);
					
					var marker = new google.maps.Marker({
					  map: map, 
					  position: results[0].geometry.location,
					  title : $location
					});
					
					var contentString = '<div class="map-infowindow">'+
						( ($title) ? '<h3>' + $title + '</h3>' : '' ) + 
						$location + '<br/>' +
						'<a href="https://web.archive.org/web/20260515111559/https://maps.google.com/?q='+ $location +'" target="_blank">View on Google Map</a>' +
						'</div>';
					
					var infowindow = new google.maps.InfoWindow({
					  content: contentString
					});
					
					google.maps.event.addListener(marker, 'click', function() {
						infowindow.open(map,marker);
					});
					
				} else {
					$('#'+ $map_id).html("Geocode was not successful for the following reason: " + status);
				}
			});
			
		});
        
    });
});
}

/*
     FILE ARCHIVED ON 11:15:59 May 15, 2026 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:02:25 Nov 22, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.424
  load_resource: 82.341
  PetaboxLoader3.resolve: 26.516
  PetaboxLoader3.datanode: 43.769
*/