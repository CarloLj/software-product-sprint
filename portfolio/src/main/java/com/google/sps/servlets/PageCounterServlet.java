package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.sps.ServerMain;

/** Servlet that returns HTML that contains the page view count. */
@WebServlet("/counter-date")
public class PageCounterServlet extends HttpServlet {
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    response.setContentType("text/html;");
    response.getWriter().println("This page has been viewed " + ServerMain.first.getPageViews() + " times. The last update was made at: "+ ServerMain.first.getLastUpdate()  );
    //<p id='pagecounter-text' class='pagecounter-text'></p>
  }
}
