/*
 
 Copyright (c) 2012 - Zynga Inc.
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 
 */

#include <stdio.h>
#include <stdlib.h>
#include <assert.h>
#include "sqlite/sqlite3.h"
#include "NSPlatformMacros.h"

static int _initialized = 0;
static sqlite3 *_db;
static sqlite3_stmt *_stmt_select;
static sqlite3_stmt *_stmt_remove;
static sqlite3_stmt *_stmt_clear;
static sqlite3_stmt *_stmt_update;


static void localStorageLazyInit();
static void localStorageCreateTable();

static void localStorageCreateTable()
{
	const char *sql_createtable = "CREATE TABLE IF NOT EXISTS data(key TEXT PRIMARY KEY,value TEXT);";
	sqlite3_stmt *stmt;
	int ok=sqlite3_prepare_v2(_db, sql_createtable, -1, &stmt, NULL);
	ok |= sqlite3_step(stmt);
	ok |= sqlite3_finalize(stmt);
	
	if( ok != SQLITE_OK && ok != SQLITE_DONE)
		NSLOG("Error in CREATE TABLE\n");
}

void localStorageInit(const char *fullpath)
{
	//NSLOG("localStorageInit %s", fullpath);

	if( ! _initialized ) {

		int ret = 0;
		
		if (!fullpath)
			ret = sqlite3_open(":memory:",&_db);
		else
			ret = sqlite3_open(fullpath, &_db);

		if( ret != SQLITE_OK ) {
			NSLOG("Error opening DB: %s", sqlite3_errmsg(_db));
			return;
		}

		localStorageCreateTable();

		// SELECT
		const char *sql_select = "SELECT value FROM data WHERE key=?;";
		ret |= sqlite3_prepare_v2(_db, sql_select, -1, &_stmt_select, NULL);

		// REPLACE
		const char *sql_update = "REPLACE INTO data (key, value) VALUES (?,?);";
		ret |= sqlite3_prepare_v2(_db, sql_update, -1, &_stmt_update, NULL);

		// DELETE
		const char *sql_remove = "DELETE FROM data WHERE key=?;";
		ret |= sqlite3_prepare_v2(_db, sql_remove, -1, &_stmt_remove, NULL);

		// CLEAR
		const char *sql_clear = "DELETE FROM data;";
		ret |= sqlite3_prepare_v2(_db, sql_clear, -1, &_stmt_clear, NULL);

		if( ret != SQLITE_OK ) {
			NSLOG("Error initializing DB\n");
			return;
		}
		
		_initialized = 1;
	}
}

void localStorageFree()
{
	if( _initialized ) {
		sqlite3_finalize(_stmt_select);
		sqlite3_finalize(_stmt_remove);
		sqlite3_finalize(_stmt_clear);		
		sqlite3_finalize(_stmt_update);		

		sqlite3_close(_db);
		
		_initialized = 0;
	}
}

void localStorageSetItem( const char *key, const char *value)
{
	assert( _initialized );
	
	int ok = sqlite3_bind_text(_stmt_update, 1, key, -1, SQLITE_TRANSIENT);
	ok |= sqlite3_bind_text(_stmt_update, 2, value, -1, SQLITE_TRANSIENT);

	ok |= sqlite3_step(_stmt_update);
	
	ok |= sqlite3_reset(_stmt_update);
	
	if( ok != SQLITE_OK && ok != SQLITE_DONE)
		NSLOG("Error in localStorage.setItem()\n");
}

const char* localStorageGetItem( const char *key )
{
	assert( _initialized );

	int ok = sqlite3_reset(_stmt_select);

	ok |= sqlite3_bind_text(_stmt_select, 1, key, -1, SQLITE_TRANSIENT);
	ok |= sqlite3_step(_stmt_select);
	const unsigned char *ret = sqlite3_column_text(_stmt_select, 0);
	
	if( ok != SQLITE_OK && ok != SQLITE_DONE && ok != SQLITE_ROW)
		NSLOG("Error in localStorage.getItem()\n");

	return (const char*)ret;
}

void localStorageRemoveItem( const char *key )
{
	assert( _initialized );

	int ok = sqlite3_bind_text(_stmt_remove, 1, key, -1, SQLITE_TRANSIENT);
	
	ok |= sqlite3_step(_stmt_remove);
	
	ok |= sqlite3_reset(_stmt_remove);

	if( ok != SQLITE_OK && ok != SQLITE_DONE)
		NSLOG("Error in localStorage.removeItem()\n");
}

void localStorageClearItems()
{
	assert( _initialized );

	//int ok = sqlite3_bind_text(_stmt_clear, 1, key, -1, SQLITE_TRANSIENT);
	
	int ok = sqlite3_step(_stmt_clear);
	
	ok |= sqlite3_reset(_stmt_clear);

	if( ok != SQLITE_OK && ok != SQLITE_DONE)
		NSLOG("Error in localStorage.clearItems()\n");
}
