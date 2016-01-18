$(document).ready(function () {

    /* Control the expand/collapse, change label and icon */

    $(".radio-select-container .panel-heading").on('click', function (e) {

        e.preventDefault();

        if ($(".radio-select-inner").hasClass("hide")) {

            $(".radio-select-inner").removeClass("hide");
            $(".radio-select-container .panel-heading i.fa").removeClass("fa-chevron-down");
            $(".radio-select-container .panel-heading i.fa").addClass("fa-chevron-up");
            $(".radio-select-container .panel-heading a span").text("Collapse Menu");

        } else {

            $(".radio-select-inner").addClass("hide");
            $(".radio-select-container .panel-heading i.fa").removeClass("fa-chevron-up");
            $(".radio-select-container .panel-heading i.fa").addClass("fa-chevron-down");
            $(".radio-select-container .panel-heading a span").text("Expand Menu");

        }
    });

    /*
		Function to help with keyboard navigation of the radio list, 
		keeps the currently selected item within the visible scrolling div.
		Also adds a class to the selected parent to add highlight styling.
	*/

    $(".radio-wrapper input:radio").on('change', function () {

        /* Add a class to the parent of the radio button when selected */
        $(".radio-wrapper").removeClass("checked");
        $(".radio-wrapper input:radio:checked").parents(".radio-wrapper").addClass("checked");

        /* Get heights and offsets */
        var item_offset = $(this).parents(".radio-wrapper").position();
        var item_height = $(this).parents(".radio-wrapper").outerHeight(true);
        var wrapper_height = $(".radio-select-inner").innerHeight();
        var wrapper_position = $(".radio-select-inner").scrollTop();

        if (item_offset.top - item_height < 0) {

            /* Item is above the visible area */
            $(".radio-select-inner").scrollTop(wrapper_position + item_offset.top - 15);
            /* The " - 15" compensates for bootstrap spacing */

        } else if (item_offset.top > wrapper_height - item_height) {

            /* Item is below visible area */
            $(".radio-select-inner").scrollTop(wrapper_position + item_offset.top - (wrapper_height - item_height));

        }

    });

});
