package com.google.sps.servlets.data;

import java.util.Date;

public final class InitialValues{
    private final Date lastUpdate = new Date();
    private int pageViews = 0;

    public Date getLastUpdate() {
        return lastUpdate;
    }

    public int getPageViews() {
        return pageViews;
    }

    public void addPageView() {
        pageViews++;
    }
}