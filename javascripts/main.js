(function( window,$,undefined ) {
	
})(window,$)

window.Geffect={
	blackMask:{
				target:$('.blackMask ul li'),
				action:'hover',
				init:function(){
						//var thisObj=this;
						//console.log(thisObj.action);
						this.target.find('.alphaBlack').stop(true,true).fadeTo(500,0.2);
						
						this.target.hover(function(){
							$(this).find('.alphaBlack').stop(true,true).fadeOut(500);
							$(this).find('span').stop(true,true).slideUp(1000);
							$(this).find('a').css('border-color','#e1e1e1');
							//$(this).find('a img').stop(true,true).animate({height:'137px',width:'206px'},300);
						},function(){
							$(this).find('.alphaBlack').stop(true,true).fadeTo(500,0.2);
							$(this).find('span').stop(true,true).slideDown(1000);
							$(this).find('a').css('border-color','#000000');
							//$(this).find('a img').stop(true,true).animate({height:'135px',width:'204px'},300);
						});
					},
				stop:function(){
					this.target.unbind(this.action);
					}
			},
	homeKv:{
				target:$('.homeKv ul li'),
				action:'click',
				init:function(){
						var thisObj=this;
						//console.log(this.target);
						this.target.click(function(){
							$(this).fadeOut();
							var nth=thisObj.target.length;
							var now=thisObj.target.index($(this));
							//console.log(nth,now);
							if(now<nth-1){
								thisObj.target.eq(now+1).fadeIn();
							}
							else{
								thisObj.target.eq(0).fadeIn();	
							}
						})
					},
				stop:function(){
					this.target.unbind(this.action);
					}
				
			},
	navflaot:{
				target:$('.navfloat .mainNav li'),
				action:'mouseenter',
				init:function(){
						var thisObj=this;
						//var $current=$('.navfloat ul li.current');
						//curLeft=$current.position().left;
						
						
						this.target.mouseenter(function(){
								var	tempLeft=$(this).position().left;
								var	thisWidth=parseInt($(this).css('width'))+40;
								
								var nowLeft=tempLeft+thisWidth/2-78;
								//console.log(tempLeft,thisWidth,nowLeft);
								$('.navfloat ul .currentNav01').stop(true,true).animate({'left':nowLeft+'px'},300);
								$('.navfloat ul .currentNav02').stop(true,true).animate({'left':nowLeft+'px'},300);
							});
						this.target.parent().mouseleave(function(){
								var	tempLeft=thisObj.target.filter('.current').position().left;
								var	thisWidth=parseInt(thisObj.target.filter('.current').css('width'))+40;
								var nowLeft=tempLeft+thisWidth/2-78;
								$('.navfloat ul .currentNav01').stop(true,true).animate({'left':nowLeft+'px'},300);
								$('.navfloat ul .currentNav02').stop(true,true).animate({'left':nowLeft+'px'},300);
							});
							
						this.target.mouseenter(function(){
							   
							   if($(this).attr('dLink')!=undefined){
								   $("."+$(this).attr('dLink')).addClass('active')
								}
							});
						this.target.mouseleave(function(){
								if($(this).attr('dLink')!=undefined){
								   $("."+$(this).attr('dLink')).removeClass('active')
								}
							});
						$('.secondNavMain .subNav').hover(function(){
								$(this).addClass('active');
							},function(){
								$(this).removeClass('active');	
							});	
						
					},
				stop:function(){
					this.target.unbind('mouseenter');
					this.target.parent().unbind('mouseleave');
					}
			},
	siendao:{
				target:$('.siendao'),
				action:'hover',
				init:function(){
						var thisObj=this;
						this.target.hover(function(){
								$(this).children('.siendaoMenu').stop(true,true).slideDown(1500,'easeOutQuint');
								
							},function(){
								$(this).children('.siendaoMenu').stop(true,true).slideUp(1500,'easeOutQuint');
								
							});
					
					},
				stop:function(){
					this.target.unbind(this.action);
					}
			},
	musicAction:{
				target:$('.musicAction'),
				action:'click',
				init:function(){
						this.target.toggle(function(){
							$(this).html('Music off');
							$('.jp-play').click();
						},function(){
							$(this).html('Music on');
							$('.jp-stop').click();
						});
					},
				stop:function(){
					this.target.unbind(this.action);
					$('.jp-stop').click();
					}
			},
	brandHover:{
				target:$('.brandHover'),
				action:'hover',
				init:function(){
					this.target.hover(function(){
							//console.log($(this));
							var textID=$(this).attr('ehref');
							$(this).find('span').stop(true,true).slideUp(1000);
							$('.brandText ul li').stop(true,true).fadeOut(500);
							$(textID).fadeIn(500);
						},function(){
							$(this).find('span').stop(true,true).slideDown(1000);
						});
					},
				stop:function(){
						this.target.unbind(this.action);
					}
		
			},
	secondNav:{
				target:$('.mainNav'),
				action:'hover',
				init:function(){
					
					this.target.mouseenter(function(e){
								$('.secondNav').stop(true,true).slideDown(2000,'easeOutQuint');
							
						})
						
					$('.nav').mouseleave(function(){
								$('.secondNav').stop(true,true).slideUp(2000,'easeOutQuint');
							
						});
					
					},
				
				stop:function(){
						this.target.unbind(this.action);
						$('.nav').unbind('mouseleave');
					}
		
			},
	//imagepage
	leftSeason:{
				target:$('.leftSeason ul'),
				action:'hover',
				init:function(){
					this.target.find('li').animate({'bottom':'0px','opacity':'0'},200,'easeOutQuint');
					this.target.find('li:last').animate({'opacity':'1'});
					var lock=false;
					
					this.target.mouseenter(function(){
							
							//console.log(1,lock);
							$(this).find('li').each(function(index,element){
								if(!lock){
									//$(this).fadeIn({duration:1000,queue:false});
									$(this).stop(false,false).animate({'bottom':24*index+'px','opacity':'1'},2000,'easeOutQuint');
								}
							});
						});
					this.target.mouseleave(function(){
							$(this).find('li').each(function(index,element){
								if(!lock){
									if(!$(this).hasClass('selected')){
										//$(this).fadeOut({duration:2000,queue:false});
										$(this).stop(false,false).animate({'bottom':0+'px','opacity':'0'},2000,'easeOutBack');
									}
									else{
										$(this).stop(false,false).animate({'bottom':0+'px'},2000,'easeOutBack');	
									}
								}
							});
						
						});
					this.target.find('li').click(function(){
							if(!lock){
								lock=true;
								$(this).siblings().removeClass('selected');
								$(this).addClass('selected');
								$(this).siblings().each(function(){
									$(this).stop(true,true).animate({'opacity':'0'},1000,function(){
										$(this).animate({'bottom':0+'px'},2000,'easeOutBack');
									})
								});
								$(this).stop(true,true).delay(1000).animate({'bottom':0+'px'},2000,'easeOutBack',function(){
									$(this).appendTo($(this).parent('ul'));
									lock=false;
								});
								return false;
							}
						});
					
					},
				stop:function(){
					this.target.find('li').each(function(index,element){
							$(this).css({'bottom':24*index+'px','opacity':'1'});
							$(this).unbind('click');
						});
					this.target.unbind('mouseleave');
					this.target.unbind('mouseenter');
					}
		
			},
	imageGallery:{
				target:$('.listMask ul'),
				action:'mouseover',
				init:function(){
<<<<<<< HEAD
					var intervalIDTop=0;
					var intervalIDDown=0;
					var Dslider={
						Did:'#slider',
						Dtip:'3',
						Dtime:1000,
						Dheight:148,
						Dnum:function(){
							return $(Dslider.Did).find("li").length/2;
							},
						Dslide:function(time){
							var time=time||1000;
							
							var nowTop=parseInt($(Dslider.Did).css("top"));
							now=(-1)*nowTop/Dslider.Dheight;
							
							if(now<Dslider.Dnum()-Dslider.Dtip){
							
								
								if(!$(Dslider.Did).is(":animated")){
									$(Dslider.Did).animate({"top":(nowTop-Dslider.Dheight)+"px"},time);
								}
								if($("#sliderTop").hasClass('noele')){
									$('#sliderTop').removeClass('noele');
								}
								
							}
								
							else{
								/*if(!$(Dslider.Did).is(":animated")){
									$(Dslider.Did).animate({"top":"0px"},time);
									}*/
								if(!$("#sliderBottom").hasClass('noele')){
									$('#sliderBottom').addClass('noele');
								}	
								if(!$(Dslider.Did).is(":animated")){
									$(Dslider.Did).animate({"top":(Dslider.Dnum-Dslider.Dtip)*Dslider.Dheight+'px'},time,'easeOutBounce');
									}
								}
								
								
							},
						DslideDown:function(time){
							var time=time||1000;
							
							var nowTop=parseInt($(Dslider.Did).css("top"));
							now=(-1)*nowTop/Dslider.Dheight;
							if(now>0){
									if(!$(Dslider.Did).is(":animated")){
										$(Dslider.Did).animate({"top":(nowTop+Dslider.Dheight)+"px"},time,'swing');
									}
									if($("#sliderBottom").hasClass('noele')){
										$('#sliderBottom').removeClass('noele');
									}
								
								}
							else{
									/*if(!$(Dslider.Did).is(":animated")){
										$(Dslider.Did).animate({"top":(-1)*(Dslider.Dnum()-Dslider.Dtip)*Dslider.Dheight+"px"},time,'swing');
									}*/
									if(!$("#sliderTop").hasClass('noele')){
										$('#sliderTop').addClass('noele');
									}
									if(!$(Dslider.Did).is(":animated")){
										$(Dslider.Did).animate({"top":'0px'},time,'easeOutBounce');
										
									}
									
								}
							
							},
						DintervalTop:function(){
							topLock=true;
							downLock=false;
							intervalIDTop=setInterval(function(){Dslider.Dslide();},Dslider.Dtime);
							},
						DintervalDown:function(){
							downLock=false;
							topLock=true;
							intervalIDDown=setInterval(function(){Dslider.DslideDown();},Dslider.Dtime);
							},
						DstopInterval:function(){
							downLock=false;
							topLock=false;
								clearInterval(intervalIDTop);
								
								clearInterval(intervalIDDown);
							},
=======
					/*
					var listLock=0;
					
					$('.listMask').G_mousePosition({moveOn:$('.listMask')});
					
					$('.listMask').mousemove(function(){
						
						var hpiece=$('.listMask').height()/3
>>>>>>> 3596631036bdaaefb2a3ad2f61670c191cb2104c
						
						if(dTop<hpiece&&dTop>0){
							listScroll('top');
						}
						else if(dTop>hpiece*2||dTop<hpiece*3){
							listScroll('bottom');
						}
						else{
							listScroll('stop');	
						}
						
						init:function(){
							$("#sliderBottom").click(function(){
								Dslider.Dslide();
								return false;
								});
							$("#sliderTop").click(function(){
								Dslider.DslideDown();
								return false;
								});
							$('.listMask').G_mousePosition();
							
							$('.listMask').mousemove(function(){
								var action=$(this).data('mouse').ddirection;
								//console.log(action);
								if(action=='down'){
									if(!topLock){
										Dslider.DstopInterval();
										Dslider.DintervalTop();
										//console.log('goTop');
									}
								}
								else if(action=='up'){
									if(!downLock){
										Dslider.DstopInterval();
										Dslider.DintervalDown();
										//console.log('goDown');
									}
								}
								else{
									Dslider.DstopInterval();	
									//console.log('goStop');
								}
								
							});
							$('.listMask').mouseleave(function(){
								Dslider.DstopInterval();	
								//console.log('goStop');
							});
							
							
							}
						
<<<<<<< HEAD
							
						};
					
					
					Dslider.init();
					
					
				},
				
				stop:function(){
					this.target.unbind(this.action);
					this.target.find('.listMask').unbind('mouseover');
					}
			},
	
	imageGalleryClick:{
				target:$('.listMask ul li a'),
				action:'click',
				init:function(){
					this.target.click(function(){
						//console.log($(this).attr('dimage'));
						$('.bigImage img').fadeOut('fast').attr('src',$(this).attr('dimage')).fadeIn('fast');
						return false;
					});
				},
				stop:function(){
					this.target.unbind(this.action);
					}
			},
	collectionGallery:{
				target:$('#cslider'),
				action:'click',
				init:function(){
					
				var	Dslider={
						Did:'#cslider',
						Dtip:'4',
						Dtime:3000,
						Dwidth:201,
						Dnum:function(){
							return $(Dslider.Did).find("li").length;
							},
						Dslide:function(){
							var nowLeft=parseInt($(Dslider.Did).css("left"));
							now=(-1)*nowLeft/Dslider.Dwidth;
							if(now<Dslider.Dnum()-Dslider.Dtip){
								if(!$(Dslider.Did).is(":animated")){
									$(Dslider.Did).animate({"left":(nowLeft-Dslider.Dwidth)+"px"},500);
=======
					});
					
					function listScroll(pos){
						var lInterval=0;
						if(pos=='top'){
						
							if(!listLock){
								clearInterval(lInterval);
								var lInterval=setInterval(function(){$('.listMask ul').animate({"top": "+=148px"},2000)},2000,'linear');
								listLock=1;	
							}
						}
						else if(pos=='bottom'){
							if(!listLock){
								clearInterval(lInterval);
								var lInterval=setInterval(function(){$('.listMask ul').animate({"top": "-=148px"},2000)},2000,'linear');	
								listLock=1;
							}
							
						}else if(pos=='stop'){
							clearInterval(lInterval);
							$('.listMask ul').stop(false,false);
							listLock=0;
						}
					}
					*/
					Dslider={
						Did:'#slider',
						Dtip:'3',
						Dtime:3000,
						Dheight:148,
						Dnum:function(){
							return $(Dslider.Did).find("li").length/2;
							},
						Dslide:function(){
							var nowTop=parseInt($(Dslider.Did).css("top"));
							now=(-1)*nowTop/Dslider.Dheight;
							if(now<Dslider.Dnum()-Dslider.Dtip){
								if(!$(Dslider.Did).is(":animated")){
									$(Dslider.Did).animate({"top":(nowTop-Dslider.Dheight)+"px"},500);
>>>>>>> 3596631036bdaaefb2a3ad2f61670c191cb2104c
									}
								}
							else{
								if(!$(Dslider.Did).is(":animated")){
<<<<<<< HEAD
									$(Dslider.Did).animate({"left":"0px"},500);
=======
									$(Dslider.Did).animate({"top":"0px"},500);
>>>>>>> 3596631036bdaaefb2a3ad2f61670c191cb2104c
									}
								}
								
							},
						DslideDown:function(){
<<<<<<< HEAD
							var nowLeft=parseInt($(Dslider.Did).css("left"));
							now=(-1)*nowLeft/Dslider.Dwidth;
							if(now>0){
									if(!$(Dslider.Did).is(":animated")){
										$(Dslider.Did).animate({"left":(nowLeft+Dslider.Dwidth)+"px"},500);
									}
									
=======
							var nowTop=parseInt($(Dslider.Did).css("top"));
							now=(-1)*nowTop/Dslider.Dheight;
							if(now>0){
									if(!$(Dslider.Did).is(":animated")){
										$(Dslider.Did).animate({"top":(nowTop+Dslider.Dheight)+"px"},500);
									}
>>>>>>> 3596631036bdaaefb2a3ad2f61670c191cb2104c
								
								}
							else{
									if(!$(Dslider.Did).is(":animated")){
<<<<<<< HEAD
										$(Dslider.Did).animate({"left":(-1)*(Dslider.Dnum()-Dslider.Dtip)*Dslider.Dwidth+"px"},500);
									}
									if(!$("#sliderLeft").hasClass('noele')){
										$('#sliderLeft').addClass('noele');
=======
										$(Dslider.Did).animate({"top":(-1)*(Dslider.Dnum()-Dslider.Dtip)*Dslider.Dheight+"px"},500);
>>>>>>> 3596631036bdaaefb2a3ad2f61670c191cb2104c
									}
								}
							
							},
						Dinterval:function(){
							intervalID=setInterval(function(){Dslider.Dslide();},Dslider.Dtime);
							//console.log(2);
							},
						DstopInterval:function(){
							 clearInterval(intervalID);
							},
						
						
						init:function(){
<<<<<<< HEAD
							$("#sliderLeft").click(function(){
								Dslider.Dslide();
								return false;
								});
							$("#sliderRight").click(function(){
=======
							$("#sliderTop").click(function(){
								Dslider.Dslide();
								return false;
								});
							$("#sliderBottom").click(function(){
>>>>>>> 3596631036bdaaefb2a3ad2f61670c191cb2104c
								Dslider.DslideDown();
								return false;
								});
							}
						
						};
					
					
					Dslider.init();
					
					
				},
				
				stop:function(){
					this.target.unbind(this.action);
					$('#sliderRight').unbind('click');
					$('#sliderLeft').unbind('click');
					}
		
			},
<<<<<<< HEAD
=======
	
	imageGalleryClick:{
				target:$('.listMask ul li a'),
				action:'click',
				init:function(){
					this.target.click(function(){
						//console.log($(this).attr('dimage'));
						$('.bigImage img').fadeOut('fast').attr('src',$(this).attr('dimage')).fadeIn('fast');
						return false;
					});
				},
				stop:function(){
					this.target.unbind(this.action);
					}
			},
	collectionGallery:{
				target:$('#cslider'),
				action:'click',
				init:function(){
					
					Dslider={
						Did:'#cslider',
						Dtip:'4',
						Dtime:3000,
						Dwidth:201,
						Dnum:function(){
							return $(Dslider.Did).find("li").length;
							},
						Dslide:function(){
							var nowLeft=parseInt($(Dslider.Did).css("left"));
							now=(-1)*nowLeft/Dslider.Dwidth;
							if(now<Dslider.Dnum()-Dslider.Dtip){
								if(!$(Dslider.Did).is(":animated")){
									$(Dslider.Did).animate({"left":(nowLeft-Dslider.Dwidth)+"px"},500);
									}
								}
							else{
								if(!$(Dslider.Did).is(":animated")){
									$(Dslider.Did).animate({"left":"0px"},500);
									}
								}
								
							},
						DslideDown:function(){
							var nowLeft=parseInt($(Dslider.Did).css("left"));
							now=(-1)*nowLeft/Dslider.Dwidth;
							if(now>0){
									if(!$(Dslider.Did).is(":animated")){
										$(Dslider.Did).animate({"left":(nowLeft+Dslider.Dwidth)+"px"},500);
									}
								
								}
							else{
									if(!$(Dslider.Did).is(":animated")){
										$(Dslider.Did).animate({"left":(-1)*(Dslider.Dnum()-Dslider.Dtip)*Dslider.Dwidth+"px"},500);
									}
								}
							
							},
						Dinterval:function(){
							intervalID=setInterval(function(){Dslider.Dslide();},Dslider.Dtime);
							//console.log(2);
							},
						DstopInterval:function(){
							 clearInterval(intervalID);
							},
						
						
						init:function(){
							$("#sliderLeft").click(function(){
								Dslider.Dslide();
								return false;
								});
							$("#sliderRight").click(function(){
								Dslider.DslideDown();
								return false;
								});
							}
						
						};
					
					
					Dslider.init();
					
					
				},
				
				stop:function(){
					this.target.unbind(this.action);
					$('#sliderRight').unbind('click');
					$('#sliderLeft').unbind('click');
					}
		
			},
>>>>>>> 3596631036bdaaefb2a3ad2f61670c191cb2104c
	collectionClick:{
				target:$('.collectionGalleryMask ul li a'),
				action:'click',
				init:function(){
<<<<<<< HEAD
					 if($('.collectionGalleryMask ul li a').fancybox){
=======
					
>>>>>>> 3596631036bdaaefb2a3ad2f61670c191cb2104c
						$('.collectionGalleryMask ul li a').fancybox({
							padding: 0,
							overlay : {
								speedOut : 0
							},
							openEffect : 'elastic',
							openSpeed  : 150,
			
							closeEffect : 'elastic',
							closeSpeed  : 150,
			
							closeClick : true,
			
							
						});
<<<<<<< HEAD
					 }
=======
						
>>>>>>> 3596631036bdaaefb2a3ad2f61670c191cb2104c
					
				
				},
				stop:function(){
					this.target.unbind(this.action);
					}
			},	
			
	
	
	//store
	storeGallery:{
				target:$('.storeInCity ul li'),
				action:'click',
				init:function(){
					this.target.click(function(){
						$('.store .storeImage img').fadeOut('fast').attr('src',$(this).attr('dimage')).fadeIn('fast');
						return false;
					});
						
				},
				
				stop:function(){
					this.target.unbind(this.action);
					
					}
		
			},
	newsGallery:{
				target:$('.newsMask'),
				action:'mouseover',
				init:function(){
					var intervalIDTop=0;
					var intervalIDDown=0;
				    var Dslider={
						Did:'#slider',
						Dtip:'9',
						Dtime:500,
						Dheight:28,
						Dnum:function(){
							return $(Dslider.Did).find("li").length;
							},
						Dslide:function(time){
							var time=time||500;
							
							var nowTop=parseInt($(Dslider.Did).css("top"));
							now=(-1)*nowTop/Dslider.Dheight;
							
							if(now<Dslider.Dnum()-Dslider.Dtip){
							
								
								if(!$(Dslider.Did).is(":animated")){
									$(Dslider.Did).animate({"top":(nowTop-Dslider.Dheight)+"px"},time);
								}
								if($("#sliderTop").hasClass('noele')){
									$('#sliderTop').removeClass('noele');
								}
								
							}
								
							else{
								if(!$("#sliderBottom").hasClass('noele')){
									$('#sliderBottom').addClass('noele');
								}	
								if(!$(Dslider.Did).is(":animated")){
									$(Dslider.Did).animate({"top":(Dslider.Dnum-Dslider.Dtip)*Dslider.Dheight+'px'},time,'easeOutBounce');
									}
								}
								
								
							},
						DslideDown:function(time){
							var time=time||500;
							
							var nowTop=parseInt($(Dslider.Did).css("top"));
							now=(-1)*nowTop/Dslider.Dheight;
							if(now>0){
									if(!$(Dslider.Did).is(":animated")){
										$(Dslider.Did).animate({"top":(nowTop+Dslider.Dheight)+"px"},time,'swing');
									}
									if($("#sliderBottom").hasClass('noele')){
										$('#sliderBottom').removeClass('noele');
									}
								
								}
							else{
									
									if(!$("#sliderTop").hasClass('noele')){
										$('#sliderTop').addClass('noele');
									}
									if(!$(Dslider.Did).is(":animated")){
										$(Dslider.Did).animate({"top":'0px'},time,'easeOutBounce');
										
									}
									
								}
							
							},
						DintervalTop:function(){
							topLock=true;
							downLock=false;
							intervalIDTop=setInterval(function(){Dslider.Dslide();},Dslider.Dtime);
							},
						DintervalDown:function(){
							downLock=false;
							topLock=true;
							intervalIDDown=setInterval(function(){Dslider.DslideDown();},Dslider.Dtime);
							},
						DstopInterval:function(){
							downLock=false;
							topLock=false;
								clearInterval(intervalIDTop);
								
								clearInterval(intervalIDDown);
							},
						
						
						init:function(){
							$("#sliderBottom").click(function(){
								Dslider.Dslide();
								return false;
								});
							$("#sliderTop").click(function(){
								Dslider.DslideDown();
								return false;
								});
							$('.newsMask').G_mousePosition();
							
							$('.newsMask').mousemove(function(){
								var action=$(this).data('mouse').ddirection;
								//console.log(action);
								if(action=='down'){
									if(!topLock){
										Dslider.DstopInterval();
										Dslider.DintervalTop();
										//console.log('goTop');
									}
								}
								else if(action=='up'){
									if(!downLock){
										Dslider.DstopInterval();
										Dslider.DintervalDown();
										//console.log('goDown');
									}
								}
								else{
									Dslider.DstopInterval();	
									//console.log('goStop');
								}
								
							});
							$('.newsMask').mouseleave(function(){
								Dslider.DstopInterval();	
								//console.log('goStop');
							});
							
							
							}
						
							
						};
					
					
					Dslider.init();
					
					
				},
				
				stop:function(){
					this.target.unbind(this.action);
					this.target.find('.newsMask').unbind('mouseover');
					}
			},		
	newsPage:{/*
				target:$('.newsMask02'),
				action:'mouseover',
				init:function(){
					var intervalIDTop=0;
					var intervalIDDown=0;
					var Dslider={
						Did:'.newsMask02 .pageBody',
						Dmaskid:'.newsMask02',
						DmaskH:$(Dslider.DmaskH).height(),
						DidH:$(Dslider.Did).height(),
						Dspeed:10,
						
						Dslide:function(time){
							var time=time||500;
							
							var nowTop=parseInt($(Dslider.Did).css("top"));
							var timeVar=(nowTop-(Dslider.DidH-Dslider.DmaskH))/Dslider.Dspeed;
							$('')
							
							if(now<Dslider.Dnum()-Dslider.Dtip){
							
								
								if(!$(Dslider.Did).is(":animated")){
									$(Dslider.Did).animate({"top":(nowTop-Dslider.Dheight)+"px"},time);
								}
								if($("#sliderTop").hasClass('noele')){
									$('#sliderTop').removeClass('noele');
								}
								
							}
								
							else{
								if(!$("#sliderBottom").hasClass('noele')){
									$('#sliderBottom').addClass('noele');
								}	
								if(!$(Dslider.Did).is(":animated")){
									$(Dslider.Did).animate({"top":(Dslider.Dnum-Dslider.Dtip)*Dslider.Dheight+'px'},time,'easeOutBounce');
									}
								}
								
								
							},
						DslideDown:function(time){
							var time=time||500;
							
							var nowTop=parseInt($(Dslider.Did).css("top"));
							now=(-1)*nowTop/Dslider.Dheight;
							if(now>0){
									if(!$(Dslider.Did).is(":animated")){
										$(Dslider.Did).animate({"top":(nowTop+Dslider.Dheight)+"px"},time,'swing');
									}
									if($("#sliderBottom").hasClass('noele')){
										$('#sliderBottom').removeClass('noele');
									}
								
								}
							else{
									
									if(!$("#sliderTop").hasClass('noele')){
										$('#sliderTop').addClass('noele');
									}
									if(!$(Dslider.Did).is(":animated")){
										$(Dslider.Did).animate({"top":'0px'},time,'easeOutBounce');
										
									}
									
								}
							
							},
						DintervalTop:function(){
							topLock=true;
							downLock=false;
							intervalIDTop=setInterval(function(){Dslider.Dslide();},Dslider.Dtime);
							},
						DintervalDown:function(){
							downLock=false;
							topLock=true;
							intervalIDDown=setInterval(function(){Dslider.DslideDown();},Dslider.Dtime);
							},
						DstopInterval:function(){
							downLock=false;
							topLock=false;
								clearInterval(intervalIDTop);
								
								clearInterval(intervalIDDown);
							},
						
						
						init:function(){
							$("#sliderBottom").click(function(){
								Dslider.Dslide();
								return false;
								});
							$("#sliderTop").click(function(){
								Dslider.DslideDown();
								return false;
								});
							$('.newsMask').G_mousePosition();
							
							$('.newsMask').mousemove(function(){
								var action=$(this).data('mouse').ddirection;
								//console.log(action);
								if(action=='down'){
									if(!topLock){
										Dslider.DstopInterval();
										Dslider.DintervalTop();
										//console.log('goTop');
									}
								}
								else if(action=='up'){
									if(!downLock){
										Dslider.DstopInterval();
										Dslider.DintervalDown();
										//console.log('goDown');
									}
								}
								else{
									Dslider.DstopInterval();	
									//console.log('goStop');
								}
								
							});
							$('.newsMask').mouseleave(function(){
								Dslider.DstopInterval();	
								//console.log('goStop');
							});
							
							
							}
						
							
						};
					
					
					Dslider.init();
					
					
				},
				
				stop:function(){
					this.target.unbind(this.action);
					this.target.find('.newsMask').unbind('mouseover');
					}
					*/
			},				
			
			
	
	form:{
			target:$('#aSubmit'),
			action:'click',
			init:function(){
					this.target.click(function(){
						$('#formSubmit').click();
						return false;
					});
				
				},
			stop:function(){
				this.target.unbind(this.action);
				}
			},
	jobs:{
			target:$('.jobs'),
			action:'click',
			init:function(){
					this.target.click(function(){
						if(!$('<div class="jobsInline"></div>').length){
							$('<div class="jobsInline"></div>').appendTo($('body'));
						}
						$('.jobsInline').load('jobs.html',function(){
							$.fancybox.open($('.jobsInline'));
						});
						return false;
					});
					
				},
			stop:function(){
				this.target.unbind(this.action);
				}
		},		
			
	
	initAll:function(){
				for(var i in this){
					//console.log(i+':'+this[i].init);
					if(this[i].init!=undefined){
						this[i].init();
					}
				}
			},
	stopAll:function(){
				for(var i in this){
					//console.log(i+':'+this[i].init);
					if(this[i].stop!=undefined){
						this[i].stop();
					}
				}
		
			}
};

$(document).ready(function(){
	
	Geffect.initAll();
	
});




//music init
$(document).ready(function(){

	$("#jquery_jplayer_1").jPlayer({
		ready: function (event) {
			$(this).jPlayer("setMedia", {
				m4a:"assets/mp3/sky.mp3",
				oga:"assets/mp3/sky.mp3"
			});
		},
		swfPath: "js",
		supplied: "m4a, oga ,mp3",
		wmode: "window",
		smoothPlayBar: true,
		keyEnabled: true
	});
});
