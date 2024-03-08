package com.appproject

import android.content.pm.PackageManager
import android.os.Bundle
import com.facebook.react.ReactActivity
import okhttp3.*
import org.json.JSONException
import org.json.JSONObject
import java.io.IOException

class MainActivity : ReactActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        fetchAdMobIdFromNpoint()
    }

    private fun fetchAdMobIdFromNpoint() {
        val client = OkHttpClient()

        val request = Request.Builder()
                .url("https://api.npoint.io/0230a9f615b373729fae")
                .build()

        client.newCall(request).enqueue(object : Callback {
            override fun onFailure(call: Call, e: IOException) {
                e.printStackTrace()
            }

            override fun onResponse(call: Call, response: Response) {
                if (response.isSuccessful) {
                    val body = response.body?.string()
                    body?.let {
                        try {
                            val jsonObject = JSONObject(it)
                            val adsObject = jsonObject.getJSONObject("Ads")
                            val admobId = adsObject.getString("MainAds")

                            // Set the fetched AdMob ID to the meta-data in AndroidManifest.xml
                            setAdMobId(admobId)
                        } catch (e: JSONException) {
                            e.printStackTrace()
                        }
                    }
                }
            }
        })
    }

    private fun setAdMobId(admobId: String) {
        // Set the fetched AdMob ID to the meta-data in AndroidManifest.xml
        try {
            val metaData = packageManager.getApplicationInfo(
                    packageName, PackageManager.GET_META_DATA
            ).metaData
            metaData.putString("com.google.android.gms.ads.APPLICATION_ID", admobId)
        } catch (e: PackageManager.NameNotFoundException) {
            e.printStackTrace()
        }
    }

    override fun getMainComponentName(): String {
        return "AppProject"
    }
}
