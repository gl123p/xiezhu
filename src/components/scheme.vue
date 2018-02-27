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
	  			<li class="a_hover"><a href="/scheme">酒店方案</a></li><span>|</span>
	  			<li><a href="/product">产品</a></li><span>|</span>
	  			<li><a href="/cooperation">合作加盟</a></li><span>|</span>
	  			<li><a href="#">新闻动态</a></li><span>|</span>
	  			<li class="pingtai"><a href="#">管理平台</a>
	  				<div class="off">
	  					<p><a href="">酒店管家</a></p>
	  					<p><a href="">携住论坛</a></p>
	  				</div>
	  			</li><span>|</span>
	  			<li><a href="/us">我们</a></li>
	  		</ul>
	  	</header>
	  	
	  	<div class="banner">
			<img src="../imgs/banner.jpg"/>
			<div>
				<h1>不影响正常营业，即可实现智控</h1>
				<p>酒店解决方案</p>
				<p>无需布线/0噪音/快速安装</p>
			</div>
		</div>
		<section>
			<div class="fangan_wrap">
				<div class="fangan_wrap_title">
					<p>解决<span>方案</span></p>
				</div>
				<div class="fangan">
					<img src="../imgs/resolve_bg.png"/>
					<ul>
						<li><span>1</span>VR选房</li>
						<li><span>2</span>远程控制</li>
						<li><span>3</span>无线链接</li>
						<li><span>4</span>zigbee通信传输</li>
						<li><span>5</span>酒店客房智能遥控器</li>
						<li><span>6</span>物联周边</li>
					</ul>
				</div>
				<div class="img_wrap">
					<div class="img_div">
						<img src="../imgs/overview_1.jpg"/>
						<div class="img_hover">
							<div>
								<img src="../imgs/sell.png"/>
								<p>智慧营销</p>
								<span>粘性增强、精准推送</span>
							</div>
						</div>
					</div>
					<div class="img_div">
						<img src="../imgs/overview_2.jpg"/>
						<div class="img_hover">
							<div>
								<img src="../imgs/server.png"/>
								<p>智慧服务</p>
								<span>个性化服务、先于客人发现问题并解决</span>
							</div>
						</div>
					</div>
					<div class="img_div">
						<img src="../imgs/overview_3.jpg"/>
						<div class="img_hover">
							<div>
								<img src="../imgs/guanli.png"/>
								<p>智慧管理</p>
								<span>降低能耗、科学管理</span>
							</div>
						</div>
					</div>		
				</div>
				<div class="future">
					<div class="future_l">
						<ul>
							<li>新旧皆宜</li>
							<li>成本低廉</li>
							<li>管理便捷</li>
							<li>安全保障</li>
						</ul>
					</div>
					<div class="photo_wrap">
						<img src="../imgs/phone.png"/>
					</div>
					<div class="future_r">
						<ul>
							<li>安装快速</li>
							<li>智能客控</li>
							<li>品质提升</li>
							<li>无限扩展</li>
						</ul>
					</div>
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
  	name: 'scheme',
	components: {
  	foot
  }
}

$(function(){
	//	鼠标滚动
	$(window).scroll(function(){
		if($(this).scrollTop()>0){
			$('.head').css({'background-color':'#fff','border-bottom':'1px #e5e5e5 solid'})
			$('.psp').css('color','#272727')
			$('.head ul span').css('color','#272727')
			$('.head ul a').css('color','#272727')
		}else{
			$('.head').css({'background-color':'','border-bottom':'1px #ffffff solid'})
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
	
//	图片
	$('.img_hover').mousemove(function(){
		$(this).css('opacity','0.5')
		$(this).find('div').animate({width:'80%'})
		$(this).find('div').css('opacity','1')
		$(this).find('p').css('font-size','2vw')
	})
	$('.img_hover').mouseout(function(){
		$(this).css('opacity','0.7')
		$(this).find('div').animate({width:'60%'})
		$(this).find('div').css('opacity','0.7')
		$(this).find('p').css('font-size','1.5vw')
	})
})
</script>

<style scoped>
	@import url("../css/scheme.css");
</style>
