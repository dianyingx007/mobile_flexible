# mobile_flexible

### 移动端适配方案

# 设计思路：

根据屏幕宽度设定rem值，需要适配的元素都使用rem为单位，不需要适配的元素使用px为单位。

# 原理：

1、动态生成viewport

2、根据设备像素比devicePixelRatio给html设置data-dpr属性

3、动态设置html的font-size，即设置rem大小

- 布局时，元素尺寸=设计稿标注尺寸/设计稿横向分辨率/10 （rem）
- html的font-size计算公式：font-size=deviceWidth/10

#实际做法：

1）采用原有meta标签设置像素比dpr和scale

2）如果没有meta，根据设备设置缩放比
	'苹果手机按devicePixelRatio设置，最大为3；其余设备采用dpr=1'

3）如果没有meta[name="viewport"]，添加meta标签

4）为html标签添加data-dpr属性

5）为body设置默认字体大小，为12*dpr px

6）定义refreshRem函数：更新rem，并添加font-size属性到html标签

7）添加resize和pageshow事件，调用refreshRem()：
   - 当窗口大小发生变化，触发resize
   - 当重新载入页面时，判断是否是缓存，如果是缓存，执行refreshRem()