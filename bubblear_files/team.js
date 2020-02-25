/**
 * Created by tcarmel on 23/08/18.
 */

(function($){
    // Team popup
    $(".team-item").click(function (e) {
        $(".team-popup").addClass("open-popup");
        var arr = $(".team-item").toArray();
        var i;
        for (i = 0; i < arr.length; i++) {
            if ($(arr[i]).attr("class") == $(this).attr("class")) {
                break;
            }
        }
        swiperFunc(i);
    });


}(jQuery));