<template>
	<div>
		<!--footer-->	
		<footer>
			<div class="footer_wrap">
				<div class="footer_content">
					<div>
						<p>商务合作</p><br />
						<a href="#">供应商合作</a><br />
						<a href="#">酒店升级</a>
					</div>
					<div>
						<p>关于我们</p><br />
						<a href="#">公司简介</a><br />
						<a href="#">加入我们</a><br />
						<a href="#">联系方式</a>
					</div>
					<div>
						<p>全国服务热线</p><br />
						<span>400-990-5055</span>
					</div>
					<div><img src="../imgs/weixin-logo.jpg"/></div>
				</div>
				<div class="footer_foot">
					<p>©2015 All Rights Reserved 快住智能科技（苏州）有限公司版权所有 苏ICP备15033976 许可证：苏B2-20150088</p>
				</div>
			</div>
		</footer>
	</div>
</template>

<script type="text/javascript" src="../js/jquery-3.2.1.min.js"></script>
<script>
	
</script>

<style scoped>
/*footer*/
footer{
	width: 100%;
	height: 20vw;
	/*margin-top: 5%;*/
	/*margin-bottom: 0;*/
	background: url(../imgs/footer-bg.jpg) no-repeat;
}
.footer_wrap{
	width: 80%;
	margin-left: 10%;
	padding-top: 4%;
	box-sizing: border-box;
	/*margin-bottom: 5%;*/
}
.footer_content{
	overflow: hidden;
}
.footer_content div{
	float: left;
	margin-left: 10%;
	font-size: 1vw;
	color: #fff;
}
.footer_content div p{
	font-size: 1.4vw;
	line-height: 3vw;
}
.footer_content div a{
	text-decoration: none;
	color: #fff;
	line-height: 1.8vw;
}
.footer_content div:last-of-type{
	float: right;
}
/*.footer_content div img{
	width: 100%;
}*/
.footer_foot{
	margin-top: 3%;
	text-align: center;
	color: gainsboro;
	font-size: 0.6vw;
}

</style>