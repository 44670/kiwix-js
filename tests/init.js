/**
 * init.js : Configuration for the library require.js
 * This file handles the dependencies between javascript libraries, for the unit tests
 * 
 * Copyright 2013 Mossroy
 * License GPL v3:
 * 
 * This file is part of Evopedia.
 * 
 * Evopedia is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * Evopedia is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with Evopedia (file LICENSE-GPLv3.txt).  If not, see <http://www.gnu.org/licenses/>
 */
require.config({
    baseUrl: 'www/js/lib',
    paths: {
        'zepto': 'zepto',
        'jquery': 'jquery-2.0.3',
        'title': 'title',
        'archive': 'archive'
    }
});

requirejs(['../../../tests/tests']);