
$('.collection').on('click', '.collection-item', function(){
	var $badge = $('.badge', this);
	if ($badge.length === 0){
		$badge = $('<span class="badge brown-text">0</span>').appendTo(this);
	}

	$badge.text(parseInt($badge.text()) + 1);
});