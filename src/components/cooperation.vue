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
	  			<li class="a_hover"><a href="/cooperation">合作加盟</a></li><span>|</span>
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
	  	
	  	<div class="top_img">
			<img src="../imgs/top-banner.jpg"/>
			<div>
				<h1>合作加盟</h1>
				<p>Cooperation and join</p>
			</div>
		</div>
		
		<section>
			<div class="policy">
				<div class="policy_title">
					<p>加盟政策</p>
					<span>Franchise policy</span>
				</div>
				<div class="policy_content">
					<div class="top_con">
						<h1>01</h1>
						<hr />
						<br />
						<p>分为省级代理和市级代理两个级别，每个省/市只有一个代理商</p>
					</div>
					<div class="down_con">
						<h1>02</h1>
						<hr /><br />
						<p>以省级代理为区域中心，以市级代理划分区域市场</p>
					</div>
					<div class="top_con">
						<h1>03</h1>
						<hr /><br />
						<p>省级代理可以发展市级代理，省级代理商负责向市级代理商提供产品</p>
					</div>
					<div class="down_con">
						<h1>04</h1>
						<hr /><br />
						<p>没有代理商的区域，市级代理向我司申请销售许可权</p>
					</div>
					<div class="top_con">
						<h1>05</h1>
						<hr /><br />
						<p>已有代理商的区域，代理商需向此区域代理商申请销售权</p>
					</div>
				</div>
			</div>
			<div class="support">
				<div class="support_title">
					<p>您将获得以下支持</p>
					<span>Support for you</span>
				</div>
				<ul class="support_content">
					<li class="con_l">
						<!--<div class="support_le">-->
							<div class="supp1 p_hover">
								<p>1.品牌支持：规范化的品牌管理、标准化的服务体系、统一的IC策划，为加盟商奠定良好的品牌基础。</p>
							</div>
							<div class="supp2 p_hover">
								<p>2.技术支持：携住科技专业技术团队全天24小时护航，确保系统顺畅运行，同时提供数据储存、数据分析、数据推送等各项技术支持服务。</p>
							</div>
						<!--</div>-->
					</li>
					<li>
						<div class="support_ri p_hover">
							<p>3.管理支持：携住总结自身发展经验并结合世界先进管理模式，创造全新的企业管理标准及加盟管理标准。</p>
						</div>
					</li>
					<li class="con_r">
						<div class="suppor_top">
							<div class="p_hover">
								<p>4.运营支持：全方位一体化支持，实现盈利最大化。为加盟商提供全面支持。</p>
							</div>
							<div class="p_hover">
								<p>5.培训支持：携住推出全面的培训体系，以品牌和产品为核心，精心规划培训资料。</p>
							</div>
						</div>
						<div class="suppor_down p_hover">
							<p>6.推广支持：全方位立体整合传播推广，助力销量提升突破。</p>
						</div>
					</li>
				</ul>
			</div>
			<div class="franchisee">
				<div class="franchisee_title">
					<hr />
					<p>理想的加盟商</p>
					<span>The ideal franchisee</span>
				</div>
				<div class="franchisee_content">
					<div class="franchisee_con">
						<img src=""/>
						<p>认同携住文化</p>
					</div>
					<div class="franchisee_con">
						<img src=""/>
						<p>良好的商业意识</p>
					</div>
					<div class="franchisee_con">
						<img src=""/>
						<p>共同发展的信心</p>
					</div>
					<div class="franchisee_con">
						<img src=""/>
						<p>良好的当地资源渠道</p>
					</div>
					<div class="franchisee_con">
						<img src=""/>
						<p>长期投入，亲自运营</p>
					</div>
				</div>
			</div>
			<div class="process">
				<div class="process_title">
					<p>加盟流程</p>
					<span>Join process</span>
				</div>
				<div class="process_content">
					<ul class="join_list">
						<li>
							<div class="join_li"></div>
							<div>
								<img src="../imgs/join_list_1.jpg"/>
							</div>
						</li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
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

})
$(function(){
	$('.top_con').mouseover(function(){
		$(this).animate({top:'-2%'})
		$(this).find('hr').animate({width:0})
	})
	$('.top_con').mouseout(function(){
		$(this).animate({top:'0'})
		$(this).find('hr').animate({width:'22%'})
	})
	$('.down_con').mouseover(function(){
		$(this).animate({top:'12%'})
		$(this).find('hr').animate({width:0})
	})
	$('.down_con').mouseout(function(){
		$(this).animate({top:'10%'})
		$(this).find('hr').animate({width:'22%'})
	})
})
$(function(){
	$('.p_hover').mouseover(function(){
		$(this).find('p').css('opacity','0.9')
	})
	$('.p_hover').mouseout(function(){
		$(this).find('p').css('opacity','0.5')
	})
})

</script>

<style scoped>
	@import url("../css/cooperation.css");
</style>
