<template>
  <div class="headerwrapper">
    <div class="header-left">
      <a href="index" class="navbar-brand" id="headlogo">
        <img src="static/images/logo.svg">
        <span class="head-search-btn">
          <!-- <v-button type="ghost" shape="circle-outline">
             <v-icon type="search" />
          </v-button> -->
        </span>
      </a>
    </div>
    <div class="header-right">
      <div class="pull-left">
        <input type="search" id="txtSearch_top" name="Keyword" value="" class="form-control search-input fulltext-retrieval acInput" placeholder="搜索 功能、数据、同事......" autocomplete="off">
      </div>
      <div class="pull-right">
        <ul>
          <li v-for="(item,index) in appMode" :key="index" :class="[CurentModule==item.appCode||(item.appCode=='MyTask'&&CurentModule=='')? 'active':'']" @click="changeApp(item.appCode)">{{item.displayName}}</li>
          <li v-if="currentHasShow">更多应用</li>
          <li class="active" v-else>{{currentApp.DisplayName}}</li>
        </ul>
      </div>
    </div>
    <div class="app-list">
      
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
// import { GetEngineCode, GetHeaderMenusInfo } from '../service/getData';

@Component({
  name: 'my-header'
})
export default class Header extends Vue {
  currentApp: any = {
    Children: [],
    Code: 'D000131csdteettet',
    DisplayName: 'csd test',
    Icon: 'icon-cgfk',
    IsAppSetting: false,
    NodeType: 0,
    ObjectID: 'da479d1a-5e69-4d7f-98d5-ac68bc5cd009',
    ParentCode: null,
    Url: '#'
  }
  appMode: any[] = [
    {
      active: true,
      appCode: '',
      children: null,
      displayName: '',
      href: '',
      icon: '',
      isMyTask: false
    }
  ];
  MoreApps: any[] = [];
  CurentModule:string = '';
  NodeCode: string = 'D000131detretrt';
  ShowInstallMoreApp:boolean = false;
  currentHasShow = false;
  async getLeftMenusInfo () {
    const that = this
    this.$store.dispatch('getLeftMenusInfo', this.NodeCode)
    .then(data => {
      if (data.Successful) {
        that.currentApp = data.ReturnData.AppChildren[that.CurentModule]
      }
    })
  }
  async GetHeaderMenusInfo () {
    const that = this
    this.$store.dispatch('getHeaderMenusInfo', this.NodeCode)
    .then(data => {
      if (data.Successful) {
        that.appMode = data.ReturnData.Apps
        that.MoreApps = data.ReturnData.MoreApps
        that.ShowInstallMoreApp = data.ReturnData.ShowInstallMoreApp
        that.CurentModule = data.ReturnData.CurentModule
        for (let i = 0; i < this.appMode.length - 1; i += 1) {
          if (that.CurentModule === that.appMode[i].appCode || that.CurentModule === '') {
            that.currentHasShow = true
            break
          }
        }
        that.getLeftMenusInfo()
      }
    })
  }
  changeApp (code:string) {
    debugger
    this.NodeCode = code
    this.GetHeaderMenusInfo()
  }
  mounted () {
    // this.getEngineCode();
    this.GetHeaderMenusInfo()
  }
}
</script>
<style lang="less" scoped>
.headerwrapper {
  display: flex;
  border-bottom: 1px solid #d7d5d5;
  .header-left {
    height: 52px;
    width: 246px;
    border-right: 1px solid rgba(255, 255, 255, 0.14);
    background-color: #fff;
    box-sizing: border-box;
    color: #fff;
    display: flex;
    .navbar-brand {
      margin-left: 20px;
      margin-top: 10px;
      img {
        height: 35px;
      }
    }
  }
  .header-right {
    display: flex;
    .pull-left {
      height: 54px;
      input {
        height: 34px;
        line-height: 34px;
        margin: 12px;
        width: 220px;
      }
    }
    .pull-right {
      height: 55px;
      margin-left: 140px;
      ul {
        margin: 0 0;
        list-style: none;
        display: flex;
        li {
          height: 54px;
          line-height: 54px;
          margin: 0 5px;
          padding: 0 5px;
          font-size: 14px;    
        }
        .active{
          color: #37abfd;
          border-bottom: 2px solid #37abfd;
        }
        li:hover{cursor: pointer; color: #37abfd;}
      }
    }
  }
  .app-list{
    width: 300px;
    border: 0px;
    background-color: rgb(255, 255, 255);
    border-radius: 3px;
    position: fixed;
    left: 826px;
    top: 59px;
    z-index: 9999;
    background: #37abfd;
  }
}
</style>

