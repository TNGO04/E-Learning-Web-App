package com.example.wbdvngosp21serverjava.models;

public class Widget {

    private String topicId;
    private String name;
    private Integer id;
    private String type;
    private Integer widgetOrder;
    private String text;

    private String url;
    private Integer size;
    private Integer width;
    private Integer height;
    private String cssClass;
    private String style;
    private String value;

    public Widget() {}

    public Widget(String topicId, String name, Integer id, String type, Integer widgetOrder, String text, String url, Integer size, Integer width, Integer height, String cssClass, String style, String value) {
        this.topicId = topicId;
        this.name = name;
        this.id = id;
        this.type = type;
        this.widgetOrder = widgetOrder;
        this.text = text;
        this.url = url;
        this.size = size;
        this.width = width;
        this.height = height;
        this.cssClass = cssClass;
        this.style = style;
        this.value = value;
    }


    public String getTopicId() {
        return this.topicId;
    }

    public void setTopicId(String topicId) {
        this.topicId = topicId;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getType() {
        return this.type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getWidgetOrder() {
        return this.widgetOrder;
    }

    public void setWidgetOrder(Integer widgetOrder) {
        this.widgetOrder = widgetOrder;
    }

    public String getText() {
        return this.text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getUrl() {
        return this.url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Integer getSize() {
        return this.size;
    }

    public void setSize(Integer size) {
        this.size = size;
    }

    public Integer getWidth() {
        return this.width;
    }

    public void setWidth(Integer width) {
        this.width = width;
    }

    public Integer getHeight() {
        return this.height;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }

    public String getCssClass() {
        return this.cssClass;
    }

    public void setCssClass(String cssClass) {
        this.cssClass = cssClass;
    }

    public String getStyle() {
        return this.style;
    }

    public void setStyle(String style) {
        this.style = style;
    }

    public String getValue() {
        return this.value;
    }

    public void setValue(String value) {
        this.value = value;
    }



}