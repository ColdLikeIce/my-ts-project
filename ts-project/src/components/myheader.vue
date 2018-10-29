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
          <li v-for="(item,index) in appMode" :key="index">{{item.displayName}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { GetEngineCode, GetHeaderMenusInfo } from '../service/getData';

@Component({
  name: 'my-header',
})
export default class Header extends Vue {
  queryCode: string = 'D000131detretrt';
  currentApp: any = {
    active: true,
    appCode: 'D000131cjjtest',
    children: null,
    displayName: '',
    href: '',
    icon: '',
    isMyTask: false,
  };
  appMode: any[] = [
    {
      active: true,
      appCode: '',
      children: null,
      displayName: '',
      href: '',
      icon: '',
      isMyTask: false,
    },
  ];
  MoreApps: any[] = [];
  async getEngineCode() {
    const res: any = await GetEngineCode(this.currentApp.appCode, -1);
    if (res) {
      const test = res;
    }
  }
  async GetHeaderMenusInfo () {
    debugger
    const that = this
    this.$store.dispatch('getHeaderMenusInfo', this.currentApp.appCode)
    .then(data => {
      if (data.Successful) {
        that.appMode = data.ReturnData.Apps
        that.MoreApps = data.ReturnData.MoreApps
      }
    })
    // const res: any = await GetHeaderMenusInfo(this.currentApp.appCode);
    // debugger;
    // if (res.Successful) {
    //   this.appMode = res.ReturnData.Apps;
    //   this.MoreApps = res.ReturnData.MoreApps;
    // }
  }
  mounted() {
    this.getEngineCode();
    this.GetHeaderMenusInfo();
  }
}
</script>
<style lang="less" scoped>
.headerwrapper {
  display: flex;
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
      }
    }
  }
}
</style>

