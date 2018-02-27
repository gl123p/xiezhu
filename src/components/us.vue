<template>
	<div>
		<header class="head">
	  		<div class="header_l">
	  			<a href="/">
	  				<img src="../imgs/websit-logo.jpg"/>
	  				<div class="psp">
	  					<p>携住科技</p>
	  					<span>XIE ZHU TECHNOLOGY</span>
	  				</div>
	  			</a>
	  		</div>
	  		<ul>
	  			<li><a href="/">首页</a></li><span>|</span>
	  			<li><a href="/scheme">酒店方案</a></li><span>|</span>
	  			<li><a href="/product">产品</a></li><span>|</span>
	  			<li><a href="/cooperation">合作加盟</a></li><span>|</span>
	  			<li><a href="#">新闻动态</a></li><span>|</span>
	  			<li class="pingtai"><a href="#">管理平台</a>
	  				<div class="off">
	  					<p><a href="">酒店管家</a></p>
	  					<p><a href="">携住论坛</a></p>
	  				</div>
	  			</li><span>|</span>
	  			<li class="a_hover"><a href="/us">我们</a></li>
	  		</ul>
	  	</header>
	  	
	  	<div class="top_img">
			<img src="../imgs/us-banner.jpg"/>
			<div>
				<h1>让我们的智慧，在酒店为您服务</h1>
				<p>携智能，住未来</p>
			</div>
		</div>
		
		<section>
			<div class="chengzhang">
				<div class="chengzhang_title">
					<p>成长<span>历程</span></p>
				</div>
				
			</div>
		</section>
	  	
	  	<foot></foot>
	</div>
</template>
	
<script type="text/javascript" src="../js/jquery-3.2.1.min.js"></script>
<script>
import foot from './footer'
export default {
  	name: 'product',
	components: {
  	foot
  }
}

$(function(){
	//	鼠标滚动
	$(window).scroll(function(){
		if($(this).scrollTop()>0){
			$('.head').css('background-color','#fff')
			$('.psp').css('color','#272727')
			$('.head ul span').css('color','#272727')
			$('.head ul a').css('color','#272727')
		}else{
			$('.head').css('background-color','')
			$('.psp').css('color','#fff')
			$('.head ul span').css('color','#fff')
			$('.head ul a').css('color','#fff')
		}
	})
//	nav
	$('.pingtai').mouseover(function(){
		$('.off').css('display','block')
		$('.head').css('background-color','#fff')
 		$('.psp').css('color','#272727')
		$('.head ul span').css('color','#272727')
		$('.head ul li a').addClass('a_ho')
	})
	$('.pingtai').mouseout(function(){
		$('.off').css('display','none')
		$('.head').css('background-color','')
		$('.psp').css('color','#fff')
		$('.head ul span').css('color','#fff')
		$('.head ul li a').removeClass('a_ho')
	})
	

})

</script>

<style scoped>
	@import url("../css/us.css");
</style>
