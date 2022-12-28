package com.example.wbdvngosp21serverjava.services;

import org.springframework.stereotype.Service;
import com.example.wbdvngosp21serverjava.models.Widget;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class WidgetService {
  private List<Widget> widgets;
  private Integer currentIndex;

  public WidgetService() {
    widgets = new ArrayList<Widget>();
    currentIndex = 0;
  }

  public Widget createWidget(String tid, Widget widget) {
    widget.setTopicId(tid);
    widget.setId(currentIndex);
    currentIndex++;

    widgets.add(widget);
    return widget;
  }

  public List<Widget> findWidgetsForTopic(String tid) {
    return widgets.stream().filter(
            widget -> widget.getTopicId().equals(tid)).collect(Collectors.toList());
  }

  public int updateWidget(String wid, Widget widget) {
    Integer id = Integer.parseInt(wid);

    for (int i = 0; i < widgets.size(); i++) {
      if (widgets.get(i).getId().equals(id)) {
        widgets.set(i, widget);
        return 1;
      }
    }
    return 0;
  }

  public int deleteWidget(String wid) {
    Integer id = Integer.parseInt(wid);

    for (int i = 0; i < widgets.size(); i++) {
      if (widgets.get(i).getId().equals(id)) {
        widgets.remove(i);
        return 1;
      }
    }
    return 0;
  }

  public List<Widget> findAllWidgets() {
    return widgets;
  }

  public Widget findWidgetById(String wid) {
    Integer id = Integer.parseInt(wid);

    for (int i = 0; i < widgets.size(); i++) {
      if (widgets.get(i).getId().equals(id)) {
        return widgets.get(i);
      }
    }
    return null;
  }

}
