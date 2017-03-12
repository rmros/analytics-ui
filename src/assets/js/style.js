$('.react-bs-table-search-form').find('input').css({'border-radius': '20px'});
$('.react-bs-table-search-form').find('input').css({'background-image': "url('/assets/img/search_icon.png')", 'background-position': 'right', 'background-repeat': 'no-repeat'});

$('#funnel-event-dropdown').text('Select Event');

$('.funnel-event-list-item').click(function() {
    $('#funnel-event-dropdown').text($(this).text());
})
$('#segmentation-event-dropdown').text('Select Event');

$('.segmentation-event-list-item').click(function() {
    $('#segmentation-event-dropdown').text($(this).text());
})
