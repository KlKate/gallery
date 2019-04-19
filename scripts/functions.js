
function changeImage(urlImg)
{
	//alert(el.attr('src'));
	var l = 0;
		$('#main_img div').each( function() {
			divEl = $ (this);
			divEl.animate( {"height": "1px", "opacity": 0}, 1000*(l+1));
		
			divEl.css({
					"background": "url('" +
					urlImg
					+ "') - "+ 100*l+ "px no-repeat"
				});
		divEl.animate({"height": "200px", "opacity": 1}, 1000*(l+1));
		l++
	});
}
function creatGallery()
{
	var i = 1;
	
	for(var l = 0; l < 2; l++)
	{
		var div = $('<div>', {
			class: 'partBigImage',
			css: {
				"background": "url('/images/gallery1.png') -"+ 100*l+ "px no-repeat"
			}
		});
		div.appendTo('#main_img');
	}
	$("#wr_img div").each( function () {
		var img = $('<img />', {
			id: 'smallImg' + i,
			src: '/images/gallery'+i+'.png',
			alt: 'Маленькое изображение'+i,
			width: '50px'
		});
		i++;
		
		$(img).click( function () {
			changeImage('/images/gallery'+i+'.png');
		});
		
		img.appendTo(this);
	});
}

$(document).ready( function () {
	
	creatGallery();
})