(function(){
	var mlkcca_news_root = window.document.getElementById('mlkcca_news_root');
	var app_id = mlkcca_news_root.dataset.appid;
	console.log(mlkcca_news_root.dataset.appid)
	var milkcocoa = new MilkCocoa(app_id + '.mlkcca.com');
	var ds = milkcocoa.dataStore('news');
	ds.on('push', function(item) {
		add(item.value.content);		
	})
	ds.stream().next(function(err, items) {
		items.forEach(function(item) {
			add(item.value.content);
		});
	});
	function add(content) {
		var news_item = window.document.createElement('div');
		news_item.textContent = content;
		mlkcca_news_root.appendChild(news_item);
	}
}())