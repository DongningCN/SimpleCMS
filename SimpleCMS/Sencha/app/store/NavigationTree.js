Ext.define('SimpleCMS.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'NavigationTree',

    fields: [{
        name: 'text'
    }],

    root: {
        expanded: true,
        children: [
            {
                text: '�հ�ҳ',
                viewType: 'pageblank',
                leaf: true,
                visible: false
            },
            {
                text: '500��ͼ',
                viewType: 'page500',
                leaf: true,
                visible: false
            },
            {
                text: '��¼��ͼ',
                viewType: 'login',
                leaf: true,
                visible: false
            },
            {
                text: '�޸�������ͼ',
                viewType: 'passwordreset',
                leaf: true,
                visible: false
            }
        ]
    }
});
