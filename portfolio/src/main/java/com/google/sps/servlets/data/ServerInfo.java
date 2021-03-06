package com.google.sps.servlets.data;

import java.util.Date;

/** Class containing server statistics. */
public final class ServerInfo {

  private final Date lastUpdate;
  private final int views ;

  public ServerInfo(Date _lastUpdate, int _views) {
    lastUpdate = _lastUpdate;
    views = _views;
  }

  public Date getLastUpdate() {
    return lastUpdate;
  }

  public int getViews() {
    return views;
  }
}
