package com.leaptime.webplayer.demo;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;

public class HomeActivity extends Activity {

    private static final String TAG = HomeActivity.class.getName();

    static class Game {
        String name;
        String url;

        Game(String name, String url) {
            this.name = name;
            this.url = url;
        }
    }

    private Game[] games = {
            new Game("Super Tank (Debug)", "file:///android_asset/supertank-debug/index.html"),
            new Game("Super Tank (Release)", "file:///android_asset/supertank-release/index.html"),
            new Game("Sprint Kart", "file:///android_asset/sprintkart/index.html"),
            new Game("Ludo (build by Cocos Creator)", "file:///android_asset/ludo/index.html"),
            new Game("Adam Eve (build by Construct 3)", "file:///android_asset/AdamEve/index.html")
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.home_activity);

        ListView gameListView = findViewById(R.id.game_list_view);
        ArrayAdapter<String> adapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_1, new String[]{
                games[0].name,
                games[1].name,
                games[2].name,
                games[3].name,
                games[4].name
        });
        gameListView.setAdapter(adapter);

        gameListView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                String selectedGame = games[position].name;
                String selectedUrl = games[position].url;
                launchGame(selectedUrl);
            }
        });
    }

    private void launchGame(String url) {
        Intent intent = new Intent(this, GameActivity.class);
        Bundle bundle = new Bundle();
        bundle.putString("url", url);
        intent.putExtras(bundle);
        startActivity(intent);
    }

}