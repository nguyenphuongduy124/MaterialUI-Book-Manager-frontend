import parse from 'html-react-parser';
import React from 'react';
import './SidebarMenu.scss';

SidebarMenu.propTypes = {};

const objMenu = {
  'Computer Systems': {
    Desktop: ['Desktop 1', 'Desktop 2', 'Desktop 3'],
    Laptop: ['Laptop 1', 'Laptop 2', 'Laptop 3'],
    Workstation: ['Workstation 1', 'Workstation 2', 'Workstation 3'],
    Desktop1: ['Desktop 1', 'Desktop 2', 'Desktop 3'],
    Laptop1: ['Laptop 1', 'Laptop 2', 'Laptop 3'],
    Workstation1: ['Workstation 1', 'Workstation 2', 'Workstation 3'],
  },

  'Computer Systems 2': {
    Desktop: ['Desktop 1', 'Desktop 2', 'Desktop 3'],
    Laptop: ['Laptop 1', 'Laptop 2', 'Laptop 3'],
    Workstation: ['Workstation 1', 'Workstation 2', 'Workstation 3'],
    Desktop2: ['Desktop 1', 'Desktop 2', 'Desktop 3'],
    Laptop2: ['Laptop 1', 'Laptop 2', 'Laptop 3'],
    Workstation2: ['Workstation 1', 'Workstation 2', 'Workstation 3'],
  },

  'Computer Systems 3': {
    Desktop: ['Desktop 1', 'Desktop 2', 'Desktop 3'],
    Laptop: ['Laptop 1', 'Laptop 2', 'Laptop 3'],
    Workstation: ['Workstation 1', 'Workstation 2', 'Workstation 3'],
    Desktop3: ['Desktop 1', 'Desktop 2', 'Desktop 3'],
    Laptop3: ['Laptop 1', 'Laptop 2', 'Laptop 3'],
    Workstation3: ['Workstation 1', 'Workstation 2', 'Workstation 3'],
  },

  'Computer Systems 4': {
    Desktop: ['Desktop 1', 'Desktop 2', 'Desktop 3'],
    Laptop: ['Laptop 1', 'Laptop 2', 'Laptop 3'],
    Workstation: ['Workstation 1', 'Workstation 2', 'Workstation 3'],
    Desktop4: ['Desktop 1', 'Desktop 2', 'Desktop 3'],
    Laptop4: ['Laptop 1', 'Laptop 2', 'Laptop 3'],
    Workstation4: ['Workstation 1', 'Workstation 2', 'Workstation 3'],
  },

  'Computer Systems 5': {
    Desktop: ['Desktop 1', 'Desktop 2', 'Desktop 3'],
    Laptop: ['Laptop 1', 'Laptop 2', 'Laptop 3'],
    Workstation: ['Workstation 1', 'Workstation 2', 'Workstation 3'],
    Desktop5: ['Desktop 1', 'Desktop 2', 'Desktop 3'],
    Laptop5: ['Laptop 1', 'Laptop 2', 'Laptop 3'],
    Workstation5: ['Workstation 1', 'Workstation 2', 'Workstation 3'],
  },

  'Computer Systems 6': {
    Desktop: ['Desktop 1', 'Desktop 2', 'Desktop 3'],
    Laptop: ['Laptop 1', 'Laptop 2', 'Laptop 3'],
    Workstation: ['Workstation 1', 'Workstation 2', 'Workstation 3'],
    Desktop6: ['Desktop 1', 'Desktop 2', 'Desktop 3'],
    Laptop6: ['Laptop 1', 'Laptop 2', 'Laptop 3'],
    Workstation6: ['Workstation 1', 'Workstation 2', 'Workstation 3'],
  },

  'Computer Systems 7': {
    Desktop: ['Desktop 1', 'Desktop 2', 'Desktop 3'],
    Laptop: ['Laptop 1', 'Laptop 2', 'Laptop 3'],
    Workstation: ['Workstation 1', 'Workstation 2', 'Workstation 3'],
    Desktop7: ['Desktop 1', 'Desktop 2', 'Desktop 3'],
    Laptop7: ['Laptop 1', 'Laptop 2', 'Laptop 3'],
    Workstation7: ['Workstation 1', 'Workstation 2', 'Workstation 3'],
  },
  'Computer Systems 8': [],
  'Computer Systems 9': [],
};

function renderMenu(menus, level = 1) {
  let xhtml = `<ul class="parent-${level}">`;

  for (let key in menus) {
    xhtml += '<li><a href="#">' + key;
    if (
      typeof menus[key] === 'object' &&
      !Array.isArray(menus[key]) &&
      menus[key] !== null
    ) {
      xhtml +=
        '<span class="material-icons md-18 md-dark md-inactive">' +
        'keyboard_arrow_right' +
        '</span></a>';
      xhtml += renderMenu(menus[key], level + 1);
    } else {
      if (menus[key].length > 0) {
        xhtml += '</a><ul>';
        for (var element of menus[key]) {
          xhtml += '<li><a href="#">' + element + '</a></li>';
        }
        xhtml += '</ul>';
      }
    }
    xhtml += '</a></li>';
  }
  xhtml += '</ul>';
  return xhtml;
}

function SidebarMenu(props) {
  return (
    <div className="SidebarMenu">
      <div className="SidebarMenu__inner">
        {parse(renderMenu(objMenu))}
      </div>
    </div>
  );
}

export default SidebarMenu;
