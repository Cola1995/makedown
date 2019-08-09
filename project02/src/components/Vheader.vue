<template>
	<nav class="navbar navbar-default navbar-fixed-top navbar-inverse">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Brand</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <!-- <li class="active"><router-link to="/">Link1 <span class="sr-only">(current)</span></router-link></li>
        <li><router-link to="/two">Link2</router-link></li> -->
		
        <li v-for="(item,index) in routers" :class="{active:index==currentindex}" @click="changindex(index)"><router-link :to=item.url>{{item.title}}</router-link></li>
       
      </ul>
      <form class="navbar-form navbar-left">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>

</template>


<script>
	export default{
		name:"vheader",
		data(){

			return{
				routers:[

				{url:"/",title:"Link1"},
				{url:"/two",title:"Link2"},
				],
				currentindex:0,

			}
		},
		methods:{

			changindex(index){
				this.currentindex=index;
				
			}
		},
		created:function(){
			console.log(this.$route.path)    //
			//循环touters，更改当前的index 添加选中class类
			for (var i=0;i<this.routers.length;i++){

				if (this.routers[i].url==this.$route.path){
					this.currentindex=i;
					return;
				}
					
				}
			}
			
		}


	

</script>

<style>
	



</style>