Page({
  mixins: [require('../../mixin/themeChanged')],
  data: {
      list: [
          {
              id: 'form',
              name: '全局常量编辑',
              open: false,
              pages: ['button', 'input', 'form', 'list', 'slideview', 'slider', 'uploader']
          },
          {
              id: 'layout',
              name: '计算器',
              open: false,
              pages: ['article', 'badge', 'flex', 'footer', 'gallery', 'grid', 'icons', 'loading', 'loadmore', 'panel', 'preview', 'progress']
          },
        
          {
              id: 'nav',
              name: '说明',
              open: false,
              pages: ['navigation-bar', 'tabbar']
          },
         
      ]
  },
  kindToggle: function (e) {
      var id = e.currentTarget.id, list = this.data.list;
      for (var i = 0, len = list.length; i < len; ++i) {
          if (list[i].id == id) {
              list[i].open = !list[i].open
          } else {
              list[i].open = false
          }
      }
      this.setData({
          list: list
      });
  },
  changeTheme: function() {
      console.log(this.data);
      getApp().themeChanged(this.data.theme === 'light' ? 'dark' : 'light');
  }
});
