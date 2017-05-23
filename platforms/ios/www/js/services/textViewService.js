App.factory('TextViewService', function () {
  return {
    getTitle: function () {
      return 'Text Views';
    },
    getItemTitle: function (item) {
      return item ? item.title : '';
    },
    getAllThemes: function () {
      return [
        {
          title: 'Regular',
          theme: 'regular'
        },
        {
          title: 'Light',
          theme: 'light'
        },
        {
          title: 'Strong',
          theme: 'strong'
        }
      ];
    },
    getEventsForTheme: function () {
    },
    getData: function () {
      return [];
    },
    prepareParams: function (item) {
      return {
        textViewVisible: true,
        theme: item.theme,
        items: this.getData()
      };
    }
  };
});
